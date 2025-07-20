// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, enum: ['student', 'admin'], default: 'student' },
    subscription: {
        type: { type: String, enum: ['free', 'premium'], default: 'free' },
        startDate: Date,
        endDate: Date,
        isActive: { type: Boolean, default: false }
    },
    profile: {
        avatar: String,
        bio: String,
        learningGoals: [String],
        timezone: String
    },
    progress: [{
        courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
        completedLessons: [String],
        currentLesson: String,
        progress: { type: Number, default: 0 }, // percentage
        startDate: { type: Date, default: Date.now },
        lastAccessed: { type: Date, default: Date.now }
    }],
    achievements: [{
        type: String,
        title: String,
        description: String,
        earnedAt: { type: Date, default: Date.now },
        icon: String
    }],
    dailyStreak: {
        current: { type: Number, default: 0 },
        longest: { type: Number, default: 0 },
        lastActivity: Date
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);