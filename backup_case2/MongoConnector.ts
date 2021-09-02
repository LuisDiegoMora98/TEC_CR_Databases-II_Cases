import mongoose from 'mongoose';
import dotenv from "dotenv";
import path from 'path';

export default() => {
    dotenv.config({path: path.join(__dirname ,'.env')});
    
    const connect = () => {
        mongoose.connect(process.env.MONGODB_URI as string).then(()=>{
            console.log('Connected to mongodb');
        },error=>{
            console.log(error);
    });
    };

    connect();

    mongoose.connection.on('disconnected',connect);
}