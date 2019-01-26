var conn = require("../config/db_connection");
var connection = conn.getConnection();
connection.connect();
//import the express
var express = require("express");
var router = express.Router();
//import db_properties for matching of token
var properties = require("../config/db_properties");
//import jwt-simple token manipulation
var d_token = require('../token/decode_token');

//create the post request since frontend sending the token for verification purpose
router.post("/", (req, res) => {

    //verifying the current user is logged in or not
    var token = req.body.token

    if (token === properties.token) {

        var requestFor = req.body.requestFor

        //import jwt-simple for token manipulation
        var d_token = require('../token/decode_token');
        var user = d_token(token, 'encrypted')

        if (requestFor === 'getAddress')
            connection.query(`select addressId,name,mobile,pincode,houseNo,colony,landmark,city,state,type from UserAddress 
                            where userId = (select userId from userDetails where email=?)`, [user.email],
                (err, recordsArray, fields) => {
                    if (err != null)
                        console.log(err)
                    if(recordsArray.length>0)
                    res.send({
                        "message" : "success",
                        "address" : recordsArray
                    })
                    else
                    res.send({"message" : "No Address Found"})
                })

        else if (requestFor === 'setAddress') {
            var address = {
                name: req.body.addressDetails.name,
                mobile: req.body.addressDetails.mobile,
                pincode: req.body.addressDetails.pincode,
                house: req.body.addressDetails.house,
                colony: req.body.addressDetails.colony,
                landmark: req.body.addressDetails.landmark,
                city: req.body.addressDetails.city,
                state: req.body.addressDetails.state,
                type: req.body.addressDetails.type
            }
            //create ref to validate function
            var validate = require("../validations/addressValidate");
            //calling validate function for form validation at server side
            if (validate(address) === false) {
                res.send({
                    status: "Failed",
                    message: "*** Address Validation Failed ***"
                })
                return
            }

            connection.query(`insert into UserAddress
                            (userId,name,mobile,pincode,houseNo,colony,landmark,city,state,type) 
                            values((select userId from userDetails where email = ?),?,?,?,?,?,?,?,?,?)`,
                [user.email, address.name, address.mobile, address.pincode, address.house,
                address.colony, address.landmark, address.city, address.state, address.type],
                (err, recordsArray, fields) => {
                    res.send({ message: 'Address Successfully Saved' })
                })
        }

        else if (requestFor === 'updateAddress') {
            var address = {
                id: req.body.addressDetails.id,
                name: req.body.addressDetails.name,
                mobile: req.body.addressDetails.mobile,
                pincode: req.body.addressDetails.pincode,
                house: req.body.addressDetails.house,
                colony: req.body.addressDetails.colony,
                landmark: req.body.addressDetails.landmark,
                city: req.body.addressDetails.city,
                state: req.body.addressDetails.state,
                type: req.body.addressDetails.type
            }

            //create ref to validate function
            var validate = require("../validations/addressValidate");
            //calling validate function for form validation at server side
            if (validate(address) === false) {
                res.send({
                    status: "Failed",
                    message: "*** Address Validation Failed ***"
                })
                return
            }

            connection.query(`update UserAddress set name=?,mobile=?,pincode=?,houseNo=?,colony=?,
                                landmark=?,city=?,state=?,type=? where addressId=?`,
                [address.name, address.mobile, address.pincode, address.house, address.colony,
                address.landmark, address.city, address.state, address.type, address.id],
                (err, recordsArray, fields) => {
                    res.send({ message: 'Address Successfully Updated' })
                })
        }
        else if(requestFor ==='deleteAddress'){
            var id = req.body.addressId
            connection.query('delete from UserAddress where addressId=?',[id],
                        (err,recordsArray,fields)=>{
                            res.send({message: 'Address Deleted Successfully'})
                        })
        }
        else
            res.send({ message: 'Error while fetching Address' })
    }
    else {
        res.send({ message: "Unauthorised user" });
    }
})

//export the router
module.exports = router;