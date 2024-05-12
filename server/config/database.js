import mongoose from "mongoose";
export const connection=async()=>
    {
        const {connection}=await mongoose.connect(process.env.Mongo_URI);
        console.log(`Monogdb is connected with ${ connection.host}`);
    }