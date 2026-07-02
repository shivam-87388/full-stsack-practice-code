import mongoose from 'mongoose';

const userschema = new mongoose.Schema({
  firstname: String,
  lastname: String required,
  password: String required,

 });