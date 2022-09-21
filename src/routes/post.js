import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const posts = await req.context.models.Post.find({}).populate('user');
  return res.send(posts);
});

router.get('/:postId', async (req, res) => {
  const post = await req.context.models.Post.findById(req.params.postId)
    .populate('comments')
    .populate('user');
  return res.send(post);
});

router.post('/', async (req, res) => {
  const post = await req.context.models.Post.create({
    text: req.body.text,
    user: req.context.me.id,
  });

  return res.send(post);
});

router.post('/:postId', async (req, res) => {
  const post = await req.context.models.Post.findById(req.params.postId);
  post.text = req.body.text;
  post.title = req.body.title;
  post.display = req.body.display;
  await post.save();
  return res.send(post);
});

router.delete('/:postId', async (req, res) => {
  const post = await req.context.models.Post.findById(req.params.postId);

  if (post) {
    await post.remove();
  }

  return res.send(post);
});

export default router;
