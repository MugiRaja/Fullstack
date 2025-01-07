import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser);
app.use(cors({ credentails: true }));

app.get('/', (req, res) => res.send(console.log('hai...')));

app.listen(port, (error) => {
  if (error) {
    console.log(`server fail to start on:${port}`);
  } else {
    console.log(`server started on port:${port}`);
  }
});
