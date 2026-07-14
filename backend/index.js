const express = require('express');
const connection_db = require("./config/connection");
const cors = require('cors')

require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 5000;
connection_db();

app.use(cors())
app.use(express.json());

app.use("/todo",require("./router/todoRouter"));




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});