import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './config/mongodb.js';

const app = express();

const port = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.get('/', (req, res) => {
  res.send('API is working');
});

app.listen(port, (error) => {
  if (error) {
    console.log(`Server failed to start on port ${port}`);
  } else {
    console.log(`Server started on port ${port}`);
  }
});
