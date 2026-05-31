const mongoose = require ("mongoose")


 const connect_db = async()=> {
     try {
        const connection = await mongoose.connect(process.env.Mongo_URI);
        console.log("successfull database connected");
    }
    catch (error) {
        console.error("connection failed:", error.message);
        
    }
};    

module.exports = connect_db; 

