import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';
import authRouter from './routes/authRotes.js';

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get('/', (req, res) => res.send('API Working'));
app.use('/api/auth', authRouter);

app.listen(4000, () => {
  console.log('Server started');
});
