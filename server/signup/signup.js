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
    
    //create ref to validate function
    var validate = require("../validations/signupValidate");
    var user={
    email : req.body.email,
    password : req.body.password,
    firstName : req.body.firstName,
    lastName : req.body.lastName,
    mobile : req.body.mobile
    }
    //calling validate function for form validation at server side
    if(validate(user)===false)
    {
        res.send({
            signup : "Failed",
            message : "*** Form Validation Failed ***"
        })
        return
    }
    //checking for new user or existing user
    connection.query("select email,mobile from userDetails where email=? or mobile=?",
                    [user.email,user.mobile],(err,recordsArray,fields)=>{
        if(err)
        res.send({
            "code" : 400,
            "failed" : "Error Occured"
        })
        else{
            if(recordsArray.length==1)
            {
    //checking either mobile or email or both already exists in database or not
                if(recordsArray[0].email===user.email && recordsArray[0].mobile===user.mobile)
                res.send({
                    signup : "Failed",
                    message : "Email and Mobile already exists"
                })
                else if(recordsArray[0].email===user.email)
                res.send({
                    signup : "Failed",
                    message : "Email already exists"
                })
                else
                res.send({
                    signup : "Failed",
                    message : "Mobile already exists"
                })
    //checking logic here completed
            }
            else if(recordsArray.length==0)
            {
    //inserting userDetails into database 
                connection.query("insert into userDetails(email,password,firstName,lastName,mobile) values(?,?,?,?,?)",
                               [user.email,user.password,user.firstName,user.lastName,user.mobile],
                                (err,result)=>{
                                    if(err){
                                        console.log(err);
                                        res.send({
                                            "code" : 400,
                                            "failed" : "Error Occured"
                                        })
                                    }
                                    else{
                                        console.log("1 recorded inserted");
                                        res.send({
                                            signup : 'Success',
                                            message : '1 record inserted'
                                        })
                                    }
                                })
            }
    //if failed or already exists res object is send
            else
            res.send({
                signup : "Failed",
                message : "Email and Mobile already exists"
            })            
        }
    })
})
module.exports = router;