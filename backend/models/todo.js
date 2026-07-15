import mongoose from 'mongoose';
const  todo = new mongoose.Schema({ type: String, required:true });
module.exports =  todo;