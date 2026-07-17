const express = require('express');
const todo = require("../models/todo.js")

const router =  express.Router();

//get method
router.get('/', async(req, res) => { 
  try {
    const todos =  await todo.find()
    res.status(200).json({
      "message": "succesfull"
    })
  } catch (error) {
    res.status(500)
  }
});
  
//post method
router.post("/add", (req, res) => {
  try {

    res.status(200).json({ message: "sucessfull post api", 
    data: req.body });

    console.log(req.body);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete method
router.delete("/delete/:id",async(req,res)=>{
  try{
    const currentid = req.params.id;
    const deletetodo = await todo.findByIdAndDelete(currentid);
    
res.status(200).json({
  message:"sucessful todo is delete",
  data: deletetodo,
});
console.log(currentid);

  } catch(error){
    res.status(500).json({
      message: error.message
    });

  }
})
module.exports = router;