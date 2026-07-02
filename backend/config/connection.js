import mongoose from "mongoose";

 const connect_db = async()=> {
     try {
        await mongoose.connect(process.env.Mongo_URI);
        console.log("successfull database connected");
    }
    catch (error) {
        console.error("connection failed:", error.message);
        
    }
};    

export default connect_db; 

