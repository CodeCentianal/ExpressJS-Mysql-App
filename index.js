require('dotenv').config(); 
const express = require('express');
const app = express();
const port = process.env.port;
const mysql = require("mysql");
const morgan = require('morgan');

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] :response-time :date[web]'))


app.get('/', (req, res)=>{
  res.send('Hello wolrd!');
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`istening to the port! ${port}`);
})

