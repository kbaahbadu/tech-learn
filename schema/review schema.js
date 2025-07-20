//Review Schema
const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: String,
    isVerified: { type: Boolean, default: false }
}, {
    timestamps: true
});

const Review = mongoose.model('Review', reviewSchema);