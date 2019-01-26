var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
//import mongodb properties
var mydb = require("../config/mongodb_properties")

//create the client
var client = mongodb.MongoClient;

//create the Rest API.
router.get("/", (req, res) => {

    var productId = parseInt(req.query.id)
    client.connect("mongodb://localhost:27017/" + mydb.database, (err, db) => {
        db.collection(mydb.products).find({
            "productDetails.productId": productId
        }).toArray((err, array) => {
            if (array.length > 0)
                // if (array != null)
                res.send(array[0])
            else
                res.send({
                    "message": "Item Not Found"
                })
        })
    })
})

//export the router
module.exports = router;