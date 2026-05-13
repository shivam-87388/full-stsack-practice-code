
const express = require("express");
const connect_db = require("./config/connection");
require('dotenv').config();
const cors = require("cors");





const app = express();
const port = process.env.PORT || 5000;


app.use('/', (req, res) => {
  res.send('Hello World!')
})

connect_db();


app.listen(port, () => {
  console.log(`server started on  ${port}`)
})