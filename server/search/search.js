var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();

//create the client
var client = mongodb.MongoClient;

//import mongodb properties
var mydb = require("../config/mongodb_properties")

//create the Rest API.
router.post("/", (req, res) => {
    var item = req.body.item
    //console.log(item);
    client.connect("mongodb://localhost:27017/" + mydb.database, (err, db) => {
        db.collection(mydb.products).find({
            $or: [{ "productDetails.name": { $regex: new RegExp(item) } },
            { "features": { $regex: new RegExp(item) } }]
        }, { productDetails: 1 }).toArray((err, array) => {
            if (array.length > 0)
                res.send(array);
            else
                res.send({
                    "message": "Item Not Found Please Try another keywords"
                })
        })
    })
})

//export the router
module.exports = router;