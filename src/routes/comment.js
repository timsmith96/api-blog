import { Router } from 'express';
import Post from '../models/post';
import Comment from '../models/comment';
import mongoose from 'mongoose';

const router = Router();

router.get('/', async (req, res) => {
  const comments = await req.context.models.Comment.find();
  return res.send(comments);
});

router.get('/:commentId', async (req, res) => {
  const comment = await req.context.models.Comment.findById(
    req.params.commentId
  );
  return res.send(comment);
});

router.post('/:postId', async (req, res) => {
  const post = await Post.findById(req.params.postId);
  const comment = new Comment({ text: req.body.text });
  await comment.save();
  const newid = mongoose.Types.ObjectId(comment.id);
  post.comments.push(newid);
  try {
    await post.save();
  } catch (e) {
    console.error(e);
  }
  res.end();
});

router.delete('/:commentId', async (req, res) => {
  const comment = await req.context.models.Comment.findById(
    req.params.commentId
  );

  if (comment) {
    await comment.remove();
  }

  return res.send(comment);
});

export default router;
