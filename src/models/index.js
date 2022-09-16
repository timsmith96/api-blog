import mongoose from 'mongoose';

import User from './user';
import Post from './post';
import Comment from './comment';

const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User, Post, Comment };

export { connectDb };

export default models;
