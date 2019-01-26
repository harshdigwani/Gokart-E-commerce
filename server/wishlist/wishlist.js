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

    //verifying the current user is logged in or not
    var token = req.body.token

    if (token === properties.token) {

        var requestFor = req.body.requestFor

        //import jwt-simple for token manipulation decrypt
        var d_token = require('../token/decode_token');
        var user = d_token(token, 'encrypted')

        if (requestFor === 'getWishlist') {
            connection.query(`select productId from wishlist where userId =
                            (select userId from userDetails where email=?)`, [user.email],
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
                            }, { productDetails: 1, "productImages.image": 1 }).toArray((err, array) => {

                                if (array != null && array.length > 0)
                                    res.send(array);
                                else
                                    res.send({
                                        "message": "no item in your wishlist"
                                    })
                            })
                        })
                    }
                    else
                        res.send({ "message": "no items in your wishlist" })
                })
        }
        else if (requestFor === 'addWishlist') {
            var wishlist = req.body.wishlist
            connection.query('insert into wishlist values((select userId from userDetails where email=?),?)',
                [user.email, wishlist],
                (err, recordsArray, fields) => {
                    res.send({ "message": 'item added in wishlist' })
                })
        }
        else if (requestFor === 'removeWishlist') {

            var wishlist = req.body.wishlist
            connection.query('delete from wishlist where userId=(select userId from userDetails where email=?) and productId=?',
                [user.email, wishlist],
                (err, recordsArray, fields) => {
                    res.send({ "message": 'item removed from wishlist' })
                })
        }
        else
            res.send({ "message": 'error while fetching items from wishList' })
    }
    else {
        res.send({ "message": "unauthorised user" });
    }
})

//export the router
module.exports = router;