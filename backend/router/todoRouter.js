const express = require('express');
const router =  express.Router();

//get method
router.get('/', (req, res) => {
  res.status(200).json({
    msg: "successful",
  })
});

module.exports = router;