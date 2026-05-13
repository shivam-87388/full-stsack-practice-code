const mongoose  = required("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {type:String, require:true},
  lastname: {type:String},
  email:{type:String, require:true},
  password:{type:String, require:true},
 
})

module.exports = mongoose.model("user",userSchema);