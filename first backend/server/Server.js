import express from 'express';
import mongoose from 'mongoose';

const MONGOOSE_URL =
  'mongodb+srv://rmugi2463:CoLsigi1Ocd99Vw2@cluster0.rgsxz.mongodb.net/first-db';

const app = express();

//Database Connection

mongoose.connect(MONGOOSE_URL);       
//Check the database connected to backend
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error...'));

db.once('open', () => {
  console.log('Connection successfull...');
});

//database schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  phone: Number,
});

const user = mongoose.model('user', userSchema);

const demoData = {
  name: 'mukilan',
  email: 'rmugi2463@gmail.com',
  password: 'Mukil@n2002',
  phone: 7397015400,
};

app.get('/', (request, response) => {
  response.send(demoData);
});

app.listen(5000);
