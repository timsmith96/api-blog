import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const comments = await req.context.models.Comment.find();
  return res.send(comments);
});

router.get('/:commentId', async (req, res) => {
  const comment = await req.context.models.Comment.findById(
    req.params.commentId
  );
  console.log(req.params.commentId);
  return res.send(comment);
});

export default router;
