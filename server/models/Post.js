import mongoose from 'mongoose';

const postSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    views: { type: Number, required: true },
    comments: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    magazineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Magazine' }

});

module.exports = mongoose.model(Post, 'postSchema');
