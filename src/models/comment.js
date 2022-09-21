import mongoose, { Schema } from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
