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
//import mongodb properties
var mydb = require("../config/mongodb_properties")

//create the post request since frontend sending the token for verification purpose
router.post("/", (req, res) => {




    //import extend for extending json object
    var extend = require('util')._extend
    //verifying the current merchent is logged in or not
    var token = req.body.token
    if (token === properties.token) {

        var requestFor = req.body.requestFor

        //import jwt-simple for token manipulation
        var d_token = require('../token/decode_token');
        var merchent = d_token(token, 'encryptedMerchent')

        if (requestFor === 'getAdds') {

            connection.query(`select * from Adds where merchentId =
                            (select merchentId from merchentDetails where email=?)`, [merchent.email],
                (err, recordsArray, fields) => {
                    if (recordsArray.length > 0) {
                        // res.send(recordsArray)
                        var ProductList = []
                        for (var i = 0; i < recordsArray.length; i++)
                            ProductList.push(recordsArray[i].productId)

                        //importing mongodb module to fetch products details
                        var mongodb = require("mongodb");
                        //create the client
                        var client = mongodb.MongoClient;
                        //fetching data form mongodb 
                        client.connect("mongodb://localhost:27017/" + mydb.database, (err, db) => {
                            db.collection(mydb.products).find({
                                //searching list of products based on array of ids
                                "productDetails.productId": { $in: ProductList }
                            }, { productDetails: 1 }).toArray((err, array) => {

/*                                for (var i = 0; i < recordsArray.length; i++)
                                  //command to add element in json object named quantity
                                  if (array[i].productDetails.productId === recordsArray[i].productId)
                                  array[i]['productDetails] = Object.assign(array[i]['productDetails'],
                                     { "quantity": "1"  })//recordsArray[i].quantity

*/                              if (array != null && array.length > 0)
                                    res.send(array)//, "quantity": recordsArray });
                                else
                                    res.send({
                                        "message": "item not found"
                                    })
                            })
                        })
                    }
                    else
                        res.send({ "message": "no items in your account" })
                })
        }
        else if (requestFor === 'sellWithUs') {
            var item = req.body.item
            var quantity = 1    //this should taken in json object
            connection.query('insert into adds(merchentId,productId,quantity) values((select merchentId from merchentDetails where email=?),?,?)',
                [merchent.email, item, quantity],
                (err, recordsArray, fields) => {
                    if (err instanceof Error)
                        res.send({ message: err.message })
                    res.send({ message: 'your add successfully posted' })
                })
        }
        else if (requestFor === 'deleteAdd') {
            var item = req.body.item
            connection.query('delete from adds where merchentId=(select merchentId from merchentDetails where email=?) and productId=?',
                [merchent.email, item],
                (err, recordsArray, fields) => {
                    res.send({ message: 'item successfully removed from item' })
                })
        }
        else
            res.send({ message: 'error while fetching items from your adds' })
    }
    else {
        res.send({ message: "unauthorised" });
    }
})

//export the router
module.exports = router;