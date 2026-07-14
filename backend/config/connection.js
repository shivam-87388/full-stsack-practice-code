const mongoose = require('mongoose'); 
const db = mongoose.connection(process.env.MONGODB_URI);