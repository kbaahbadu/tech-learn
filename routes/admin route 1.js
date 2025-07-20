// Admin Routes
app.post('/api/admin/courses', authenticateToken, async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
    }

    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json({ message: 'Course created successfully', course });
    } catch (error) {
        console.error('Create course error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Initialize sample data
const initializeData = async () => {
    try {
        const courseCount = await Course.countDocuments();
        if (courseCount === 0) {
            const sampleCourses = [
                {
                    title: "JavaScript Fundamentals",
                    description: "Master modern JavaScript with daily 10-minute lessons covering ES6+, async/await, and DOM manipulation.",
                    category: "Programming",
                    level: "Beginner",
                    duration: "30 days",
                    totalLessons: 30,
                    image: "javascript-course.jpg",
                    rating: 4.9,
                    studentsEnrolled: 12450,
                    isPublished: true,
                    lessons: Array.from({ length: 30 }, (_, i) => ({
                        id: `js-lesson-${i + 1}`,
                        title: `Lesson ${i + 1}: JavaScript Basics`,
                        description: `Learn essential JavaScript concepts in this 10-minute lesson.`,
                        duration: "10 minutes",
                        type: "video",
                        order: i + 1,
                        isPreview: i < 3
                    })),
                    tags: ["javascript", "programming", "web development"],
                    learningObjectives: [
                        "Understand ES6+ features",
                        "Master async/await patterns",
                        "Manipulate the DOM effectively"
                    ]
                },
                {
                    title: "React Development",
                    description: "Build dynamic web applications with React hooks, components, and state management in bite-sized lessons.",
                    category: "Programming",
                    level: "Intermediate",
                    duration: "45 days",
                    totalLessons: 45,
                    image: "react-course.jpg",
                    rating: 4.8,
                    studentsEnrolled: 8920,
                    isPublished: true,
                    lessons: Array.from({ length: 45 }, (_, i) => ({
                        id: `react-lesson-${i + 1}`,
                        title: `Lesson ${i + 1}: React Fundamentals`,
                        description: `Master React concepts step by step.`,
                        duration: "10 minutes",
                        type: "video",
                        order: i + 1,
                        isPreview: i < 3
                    })),
                    tags: ["react", "javascript", "frontend"],
                    learningObjectives: [
                        "Build React components",
                        "Manage application state",
                        "Handle user interactions"
                    ]
                },
                {
                    title: "UI/UX Design Essentials",
                    description: "Learn design principles, user research, prototyping, and modern design tools through practical exercises.",
                    category: "Design",
                    level: "Beginner",
                    duration: "35 days",
                    totalLessons: 35,
                    image: "uiux-course.jpg",
                    rating: 4.9,
                    studentsEnrolled: 15680,
                    isPublished: true,
                    lessons: Array.from({ length: 35 }, (_, i) => ({
                        id: `uiux-lesson-${i + 1}`,
                        title: `Lesson ${i + 1}: Design Principles`,
                        description: `Learn essential design concepts.`,
                        duration: "10 minutes",
                        type: "interactive",
                        order: i + 1,
                        isPreview: i < 3
                    })),
                    tags: ["ui", "ux", "design", "figma"],
                    learningObjectives: [
                        "Understand design principles",
                        "Create user-centered designs",
                        "Use modern design tools"
                    ]
                }
            ];

            await Course.insertMany(sampleCourses);
            console.log('Sample courses created');
        }
    } catch (error) {
        console.error('Error initializing data:', error);
    }
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
    await initializeData();
});