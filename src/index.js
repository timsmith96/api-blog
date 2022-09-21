import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import routes from './routes';
import models, { connectDb } from './models';

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(async (req, res, next) => {
  req.context = {
    models,
    me: await models.User.findByLogin('kingjoff23'),
  };
  next();
});

// ROUTES
app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/posts', routes.post);
app.use('/comments', routes.comment);

// CONNECT TO DATABASE
const eraseDatabaseOnSync = true;

connectDb().then(async () => {
  if (eraseDatabaseOnSync) {
    await Promise.all([
      models.User.deleteMany({}),
      models.Post.deleteMany({}),
      models.Comment.deleteMany({}),
    ]);

    createUsersWithPosts();
  }

  app.listen(process.env.PORT || 3000, () =>
    console.log(`Example app listening on port ${process.env.PORT}!`)
  );
});

const createUsersWithPosts = async () => {
  const comment1 = new models.Comment({
    text: 'I am comment number 1',
  });

  const comment2 = new models.Comment({
    text: 'I am comment 2',
  });

  const comment3 = new models.Comment({
    text: 'I am comment 3',
  });

  const user1 = new models.User({
    username: 'kingjoff23',
  });

  const user2 = new models.User({
    username: 'winstonrabbit',
  });

  const post1 = new models.Post({
    title: 'Post 1 title',
    text: 'I am a blog post, number 1 :D',
    user: user1.id,
    comments: [comment1.id, comment2.id],
  });

  const post2 = new models.Post({
    title: 'Post 2 title',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem libero accusantium facere rem fuga, corporis soluta ab vel! Iste molestias sunt earum, inventore autem molestiae? Repellat soluta aperiam velit, provident nemo quam necessitatibus nihil illum minus rerum quasi pariatur qui odit, inventore recusandae reprehenderit optio, fugiat voluptate obcaecati ullam explicabo incidunt! Veniam corrupti molestias, saepe officiis dolore quasi reiciendis aut consequatur nihil possimus.Culpa, accusamus cumque maiores natus repellendus sunt dicta ratione quia asperiores perspiciatis ullam nihil, modi blanditiis sequi voluptatibus unde esse earum doloremque officia eos possimus fugit? Porro reprehenderit esse voluptatum doloremque minima eos saepe sint, excepturi et odit fuga voluptate nemo asperiores consequatur molestias autem delectus quia adipisci sequi ad eveniet rerum neque quos. Eligendi rerum est tempora a voluptas consequatur, nobis minima perspiciatis aliquid voluptates culpa itaque odio.

    Nostrum magnam obcaecati praesentium officia architecto! Sunt a nisi fuga omnis autem! Unde, quas ducimus dicta, minima tempore minus repudiandae natus et ipsum voluptas, libero error. Unde reiciendis, doloribus modi officia aperiam ullam! Similique, voluptate optio! Saepe optio iure qui ad praesentium minus! Sunt quibusdam aliquam voluptate ipsam deserunt, maiores iste quidem modi, error, pariatur magni. Fugit dignissimos nisi dolorem debitis, quas nostrum magni nobis dolorum inventore, velit quis eum facilis, quae ducimus eius at nesciunt.
    
    Numquam harum ipsum sit reiciendis, suscipit ullam temporibus error hic in quos voluptatum maiores rerum, animi ea doloremque optio tempora? Itaque ab minus vitae nostrum veniam vel eos neque, dolorum pariatur possimus iure, nobis officia necessitatibus? Ex, magni praesentium nihil quasi aliquam, similique ad doloribus optio asperiores minus aliquid dolorem dignissimos vero pariatur nobis accusamus. Vitae dolorem, ea quos temporibus consequatur, doloribus itaque voluptate corrupti officiis nostrum nemo commodi omnis? Tempora totam ducimus illo deleniti dolorum eos laboriosam itaque, quidem quas quis consequatur quibusdam eius enim rerum quod.
    
    Illum ab aliquid exercitationem? Nam, iste voluptas enim maxime a ipsam veritatis eum ipsa nisi facilis aperiam neque, aut fugiat, quos perferendis. Itaque quasi in placeat nam eaque ducimus similique quis animi laboriosam ullam repudiandae et exercitationem maxime a debitis asperiores, excepturi sed voluptatibus ratione error ipsa aperiam illum, quisquam dignissimos? Dolorem harum exercitationem provident! Eaque rem eius labore voluptates nam nostrum magnam eligendi corrupti sit debitis, ipsam maxime odit tenetur dignissimos veniam explicabo!
    
    Sint repellat nam, libero assumenda doloribus consequatur!
    
    Distinctio architecto esse sed consequuntur praesentium et minus ducimus molestias quod repudiandae! Nemo libero quaerat amet dolorem. Excepturi nemo facere impedit animi rem recusandae odit laboriosam cupiditate nobis corporis aliquid aperiam vitae eum sequi iure inventore magnam adipisci placeat a reprehenderit odio, ex quos?
    
    Nesciunt doloremque saepe delectus enim facilis numquam dolorem earum, deleniti cum ipsum culpa a minima cumque ut ullam animi, optio voluptas eveniet pariatur dolores? Sed quis deleniti praesentium, minus aperiam optio minima vitae pariatur corrupti id veniam atque reprehenderit eum quae doloribus, rem neque fugiat at necessitatibus? Quibusdam animi repellendus velit magni, pariatur eum, iste ea omnis cum nostrum aspernatur beatae fuga dolorum earum possimus veniam nesciunt aut saepe perspiciatis debitis impedit explicabo repudiandae. At tenetur necessitatibus corporis eos!`,
    user: user2.id,
    comments: [comment1.id, comment2.id],
  });

  const post3 = new models.Post({
    title: 'Post 3 title',
    text: 'I am a blog post, number 2 :D',
    user: user2.id,
  });

  const post4 = new models.Post({
    title: 'Post 4 title',
    text: 'I am a blog post, number 2 :D',
    user: user2.id,
  });
  const post5 = new models.Post({
    title: 'Post 5 title',
    text: 'I am a blog post, number 2 :D',
    user: user2.id,
  });
  const post6 = new models.Post({
    title: 'Post 6 title',
    text: 'I am a blog post, number 2 :D',
    user: user2.id,
  });

  await post1.save();
  await post2.save();
  await post3.save();
  await post4.save();
  await post5.save();
  await post6.save();

  await user1.save();
  await user2.save();

  await comment1.save();
  await comment2.save();
  await comment3.save();
};
