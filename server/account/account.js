var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
//import the express
var express = require("express");
var router = express.Router();
//import db_properties for matching of token
var properties = require("../config/db_properties");

//create the post request since frontend sending the token for verification purpose
router.post("/", (req, res)=>{
    
    var token = req.body.token;

    if(token === properties.token)
    {   
    //import jwt-simple for token manipulation
        var d_token = require('../token/decode_token');
        var user = d_token(token,'encrypted')
        connection.query("select email,firstName,lastName,mobile from userdetails where email=?",[user.email],
                        (err,recordsArray,fields)=>{
                            res.send(recordsArray[0])
                        })
    }
    else{
        res.send({user :"unauthorised user"});
    }
})

//export the router
module.exports = router;