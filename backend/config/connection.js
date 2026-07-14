const mongoose = require('mongoose'); 
const connection_db = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("databse connected sucessfully")
    }
    catch (error){
        console.log("database connection failed", error.message);

    }
    
};
module.exports = connection_db;