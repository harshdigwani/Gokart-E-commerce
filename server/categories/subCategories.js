var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();
var mydb = require("../config/mongodb_properties")

//create the client
var client = mongodb.MongoClient;

//create the Rest API.
router.get("/", (req, res) => {
    //must typecast into integer because mongodb is strictly typed
    //var id = parseInt(req.params.id)
    var categoryId = parseInt(req.query.category)
    // console.log(categoryId+"aaaa");

    client.connect("mongodb://localhost:27017/" + mydb.database, (err, db) => {

        //NUMBER LONG COULD NOT SEARCH ON THE BASIS OF NUMBER OR STRING

        db.collection(mydb.category).find({ "categoryId": categoryId }, { "subCategory": 1 }).toArray((err, array) => {
            res.send((array[0].subCategory))
        });
    });
});

//export the router
module.exports = router;