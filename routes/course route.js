// Course Routes
app.get('/api/courses', async (req, res) => {
    try {
        const { category, level, search, page = 1, limit = 12 } = req.query;

        let query = { isPublished: true };

        if (category) query.category = category;
        if (level) query.level = level;
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { tags: { $in: [new RegExp(search, 'i')] } }
            ];
        }

        const courses = await Course.find(query)
            .select('-lessons.content') // Don't send lesson content in list
            .sort({ studentsEnrolled: -1, rating: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const total = await Course.countDocuments(query);

        res.json({
            courses,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total
        });
    } catch (error) {
        console.error('Get courses error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/courses/featured', async (req, res) => {
    try {
        const featuredCourses = await Course.find({
            isPublished: true,
            studentsEnrolled: { $gte: 1000 }
        })
            .select('-lessons.content')
            .sort({ rating: -1, studentsEnrolled: -1 })
            .limit(6);

        res.json(featuredCourses);
    } catch (error) {
        console.error('Get featured courses error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/api/courses/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course || !course.isPublished) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // If user is authenticated, check their progress
        let userProgress = null;
        if (req.headers.authorization) {
            try {
                const token = req.headers.authorization.split(' ')[1];
                const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
                userProgress = await Progress.findOne({
                    userId: decoded.userId,
                    courseId: course._id
                });
            } catch (err) {
                // Token invalid, continue without user progress
            }
        }

        res.json({ course, userProgress });
    } catch (error) {
        console.error('Get course error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});