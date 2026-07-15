const express = require('express');
const router =  express.Router();

//get method
router.get('/', (req, res) => {
  res.status(200).json({
    msg: "successful",
  })
});
//post method
router.post('/add', async(req, res) => {
  try{
await res.status(200).json({message:"sucessfull post api"},(req.body))

  }catch(error){
    res.status(500).json({message: error.message});

  }

  
});
module.exports = router;