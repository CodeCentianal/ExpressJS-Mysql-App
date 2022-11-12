require('dotenv').config(); 
const express = require('express');
const app = express();
const port = process.env.port;
const mysql = require("mysql");
const morgan = require('morgan');
const {con} = require('./models/connection');
const {userRouter} = require('./Routes/userRouter')

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] :response-time :date[web]'))


con.connect(err => {
  try{
    console.log(`Connected to database ${process.env.database}`);
  }
  catch(err){
    console.log('Something went wrong.');
  }
})


// starting api
app.get('/', (req, res)=>{
  res.send('Hello wolrd!');
})


// write signup api using mysql table.
app.use('/users', userRouter);

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`listening to the port! ${port}`);
})

