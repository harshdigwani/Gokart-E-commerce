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
    var subCategoryId = parseInt(req.query.subcategory)

    client.connect("mongodb://localhost:27017/"+mydb.database, (err, db) => {

        //NUMBER LONG COULD NOT SEARCH ON THE BASIS OF NUMBER OR STRING

        db.collection(mydb.brands).find({"categoryId" : categoryId , "subCategoryId" : subCategoryId}).toArray((err, array) => {
            // console.log(JSON.stringify(array))
            res.send(array);    
        })
    })
})

//export the router
module.exports = router;