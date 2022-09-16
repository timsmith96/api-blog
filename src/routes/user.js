import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  console.log(req.context);
  const users = await req.context.models.User.find();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findById(req.params.userId);
  return res.send(user);
});

export default router;
