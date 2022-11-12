const mysql = require("mysql");
var {con} = require('../models/connection');

const executeQueryFun = (query, params) =>{
    con.query(query, params, (err, result)=>{
        if(err){
            return 'Something went wrong the query';
        }
        else{
            return result;
        }
    })
}

module.exports = {executeQueryFun};