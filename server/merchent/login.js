//import db connection
var conn = require("../config/db_connection");
//import generate token
var g_token = require("../token/generate_token");
//import db properties
var properties = require("../config/db_properties");
//import the express module
var express = require("express");
//create the Router instance
//Router used to create the module
var router = express.Router();
//create the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();   
//create the post request
router.post("/",function(req,res){
    var email = req.body.email
    var password = req.body.password
    
    //create validate function variable
    var validate = require('../validations/loginValidate')
    //validate email and password at server side
    if(validate(email,password)===false){
        res.send({ login : "Failed" })
        return
    }
    connection.query("select * from merchentDetails where email=?",[email],
                    (err,recordsArray,fields)=>{

                        if(recordsArray.length>0 && recordsArray[0].password === password
                             && recordsArray[0].email === email){
                             var token = g_token(email,
                                password,
                                'encryptedmerchent')
                            properties.token = token;                                                     
                            res.send({
                                login : "Success",
                                token : properties.token,
                                merchent : true
                            })
                        }
                        else{
                            res.send({ login : "Failed",
                                       token : "invalid" })
                        }
                    })

})

module.exports = router;