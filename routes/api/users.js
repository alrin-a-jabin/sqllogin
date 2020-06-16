const express = require('express');
const router = express.Router();
const db = require('../../config/connection');

router.get('/user', (req, res) => {
    const SELECT_ALL_USER_QUERY = 'SELECT * FROM product'
    db.query(SELECT_ALL_USER_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: result
            })
        }
    })
})


var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../config');
// cryptr = new Cryptr('myTotalySecretKey');
 
// module.exports.register=function(req,res){
router.post('/register',(req,res)=>{
     var today = new Date();
     var encryptedString = cryptr.encrypt(req.body.password);
     var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":encryptedString,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
})


module.exports = router;