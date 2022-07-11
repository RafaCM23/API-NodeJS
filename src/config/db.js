import mongoose from 'mongoose';

const connectDB = (url) =>
    mongoose.connect(url).then(() => console.log('MongoDB Conectado'));
export default connectDB;
