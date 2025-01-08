import mongoose from "mongoose";

const connectDB = async() => {
    mongoose.connection.on('connected', () => console.log('Conected'))
    await mongoose.connect(`${process.env.MONGODB_URL}/signup-page`);
}

export default connectDB;