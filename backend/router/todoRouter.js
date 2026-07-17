const express = require('express');

const router =  express.Router();

//get method
router.get('/', (req, res) => {
  res.status(200).json({
    msg: "successful",
  })
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
router.delete("/delete/:id",(req,res)=>{
  try{
    const currentid = req.params.id
res.status(200).json({
  message:"sucessful todo is delete",
  data: currentid
})
console.log(currentid);

  } catch(error){
    res.status(500).json({
      message: error.message
    })

  }
})
module.exports = router;