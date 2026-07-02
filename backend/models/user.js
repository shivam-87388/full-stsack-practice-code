import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
  firstname: {type:String , require: true},
  lastname:{ type:String, required: true},
  password: String, required:true},

 });