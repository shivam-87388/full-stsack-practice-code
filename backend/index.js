const express = require('express');
const connection_db = require("./config/connection");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
connection_db();






app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});