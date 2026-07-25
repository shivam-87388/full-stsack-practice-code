const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
firstname:{type:String, required: true},
lastname:{type:String},
email: {type:String, required:true},
password:{type: String, required:true},
accountcreatedon: {type: Date,default: Date.now }
})

module.exports = mongoose.model('account', accountSchema);

