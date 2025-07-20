// Dashboard and Analytics Routes
app.get('/api/user/dashboard', authenticateToken, async (req, res) => {
    try {
        const userId = req.user._id;

        const progressRecords = await Progress.find({ userId })
            .populate('courseId', 'title image category');

        const totalCourses = progressRecords.length;
        const completedCourses = progressRecords.filter(p => p.progress === 100).length;
        const totalTimeSpent = progressRecords.reduce((sum, p) => sum + p.timeSpent, 0);

        const recentActivity = progressRecords
            .sort((a, b) => b.updatedAt - a.updatedAt)
            .slice(0, 5);

        res.json({
            stats: {
                totalCourses,
                completedCourses,
                totalTimeSpent,
                dailyStreak: req.user.dailyStreak
            },
            recentActivity,
            achievements: req.user.achievements
        });
    } catch (error) {
        console.error('Dashboard error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
