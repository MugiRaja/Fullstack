import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database connected"));
    mongoose.connection.on('error', (err) => console.error(`Database connection error: ${err}`));

    mongoose.connect(`${process.env.MONGODB_URL}/signup-page`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connectDB;
