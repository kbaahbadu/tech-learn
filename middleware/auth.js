// Middleware for authentication
const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Access token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
        const user = await User.findById(decoded.userId).select('-password');
        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

// Helper function to update daily streak
const updateDailyStreak = async (userId) => {
    const user = await User.findById(userId);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const lastActivity = user.dailyStreak.lastActivity;
    if (lastActivity) {
        const lastActivityDate = new Date(lastActivity);
        lastActivityDate.setHours(0, 0, 0, 0);

        const daysDiff = Math.floor((today - lastActivityDate) / (1000 * 60 * 60 * 24));

        if (daysDiff === 1) {
            // Consecutive day
            user.dailyStreak.current += 1;
            if (user.dailyStreak.current > user.dailyStreak.longest) {
                user.dailyStreak.longest = user.dailyStreak.current;
            }
        } else if (daysDiff > 1) {
            // Streak broken
            user.dailyStreak.current = 1;
        }
        // If daysDiff === 0, same day, don't update streak
    } else {
        // First activity
        user.dailyStreak.current = 1;
        user.dailyStreak.longest = 1;
    }

    user.dailyStreak.lastActivity = new Date();
    await user.save();
};
