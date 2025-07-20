//Progress Schema
const progressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    completedLessons: [String],
    currentLesson: String,
    timeSpent: { type: Number, default: 0 }, // in minutes
    progress: { type: Number, default: 0 }, // percentage
    quizScores: [{
        lessonId: String,
        score: Number,
        maxScore: Number,
        completedAt: Date
    }],
    certificateEarned: { type: Boolean, default: false },
    certificateIssuedAt: Date
}, {
    timestamps: true
});

const Progress = mongoose.model('Progress', progressSchema);
