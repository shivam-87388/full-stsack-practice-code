const express = require('express');
const router =  express.Router();

//get method
router.get('/', (req, res) => {
  res.status({
    status: 200,
    msg: sucessfull
  });
});

module.exports = router;