import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    todo: {type:String, required:true},
});
export default todoSchema;
