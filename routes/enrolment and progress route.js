// Enrollment and Progress Routes
app.post('/api/courses/:id/enroll', authenticateToken, async (req, res) => {
    try {
        const courseId = req.params.id;
        const userId = req.user._id;

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Check if already enrolled
        let progress = await Progress.findOne({ userId, courseId });
        if (progress) {
            return res.status(400).json({ message: 'Already enrolled in this course' });
        }

        // Check if premium course requires subscription
        if (course.isPremium && (!req.user.subscription.isActive || req.user.subscription.type !== 'premium')) {
            return res.status(403).json({ message: 'Premium subscription required' });
        }

        // Create progress record
        progress = new Progress({
            userId,
            courseId,
            currentLesson: course.lessons[0]?.id
        });
        await progress.save();

        // Update course enrollment count
        course.studentsEnrolled += 1;
        await course.save();

        // Update user progress array
        req.user.progress.push({
            courseId,
            currentLesson: course.lessons[0]?.id,
            progress: 0
        });
        await req.user.save();

        res.json({ message: 'Successfully enrolled in course', progress });
    } catch (error) {
        console.error('Enroll error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/api/courses/:courseId/lessons/:lessonId/complete', authenticateToken, async (req, res) => {
    try {
        const { courseId, lessonId } = req.params;
        const userId = req.user._id;

        const progress = await Progress.findOne({ userId, courseId });
        if (!progress) {
            return res.status(404).json({ message: 'Not enrolled in this course' });
        }

        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Add lesson to completed if not already completed
        if (!progress.completedLessons.includes(lessonId)) {
            progress.completedLessons.push(lessonId);

            // Update progress percentage
            progress.progress = Math.round((progress.completedLessons.length / course.totalLessons) * 100);

            // Find next lesson
            const currentIndex = course.lessons.findIndex(l => l.id === lessonId);
            if (currentIndex < course.lessons.length - 1) {
                progress.currentLesson = course.lessons[currentIndex + 1].id;
            }

            await progress.save();

            // Update daily streak
            await updateDailyStreak(userId);

            // Check if course is completed
            if (progress.progress === 100) {
                progress.certificateEarned = true;
                progress.certificateIssuedAt = new Date();
                await progress.save();
            }
        }

        res.json({ message: 'Lesson completed', progress });
    } catch (error) {
        console.error('Complete lesson error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// User Profile Routes
app.get('/api/user/profile', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .select('-password')
            .populate('progress.courseId', 'title image');

        res.json(user);
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.put('/api/user/profile', authenticateToken, async (req, res) => {
    try {
        const updates = req.body;
        const allowedUpdates = ['firstName', 'lastName', 'profile'];

        const user = await User.findById(req.user._id);

        Object.keys(updates).forEach(key => {
            if (allowedUpdates.includes(key)) {
                if (key === 'profile') {
                    user.profile = { ...user.profile, ...updates.profile };
                } else {
                    user[key] = updates[key];
                }
            }
        });

        await user.save();

        res.json({ message: 'Profile updated successfully', user });
    } catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
