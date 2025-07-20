// Course Schema
const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    duration: String, // e.g., "30 days"
    totalLessons: { type: Number, required: true },
    image: String,
    price: { type: Number, default: 0 },
    isPremium: { type: Boolean, default: false },
    rating: { type: Number, default: 0 },
    studentsEnrolled: { type: Number, default: 0 },
    instructor: {
        name: String,
        bio: String,
        avatar: String
    },
    lessons: [{
        id: String,
        title: String,
        description: String,
        duration: String, // e.g., "10 minutes"
        type: { type: String, enum: ['video', 'text', 'interactive', 'quiz'] },
        content: mongoose.Schema.Types.Mixed, // Flexible content structure
        order: Number,
        isPreview: { type: Boolean, default: false }
    }],
    tags: [String],
    prerequisites: [String],
    learningObjectives: [String],
    isPublished: { type: Boolean, default: false }
}, {
    timestamps: true
});

const Course = mongoose.model('Course', courseSchema);