const express = require('express');
const app = express();
const userRouter = express.Router();
const {con} = require('../models/connection');
const bcrypt = require('bcrypt');
const {executeQueryFun} = require('../Routes/queryExecuteMiddleWare');

userRouter.post('/signup', executeQueryFun,async(req, res)=>{
    // existing user or not
    const {username, password} = req.body;
    const query = `select * from userdetails where Email = ? and password = ?;`
    const params = [username, password];
    const result = await executeQueryFun(req, res,query, params);
    console.log(result);
     
    // hide the password
    // create a new user and store in database table
    
})


userRouter.get('/signin', (req, res)=>{
    res.send("welcome to signin page.")
})

module.exports = { userRouter };