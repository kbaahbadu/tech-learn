const Course = require('../models/Course');

const createCourse = async (req, res) => {
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
};

module.exports = { createCourse };
