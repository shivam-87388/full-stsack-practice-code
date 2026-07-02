import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
  firstname:{type:String , require: true},
  lastname:{type:String, required: true},
  password:{type:String, required:true},
  confirmpassword:{type:String, required:true},
 });

 export User = mongoose.model('User', userSchema);