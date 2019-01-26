var express = require("express");
var mongodb = require("mongodb");
var router = express.Router();

//create the client
var client = mongodb.MongoClient;

//import mongodb properties
var mydb = require("../config/mongodb_properties")

//create the Rest API.
router.get("/", (req, res) => {


    var categoryId = parseInt(req.query.category)
    var subCategoryId = parseInt(req.query.subcategory)
    var brand = (req.query.brand).toLowerCase
    // console.log("C ID : " +categoryId +"\n SC ID : " +subCategoryId + "\n B : " + brand)

    client.connect("mongodb://localhost:27017/" + mydb.database, (err, db) => {
        db.collection(mydb.products).find({
            "productDetails.subCategoryId": subCategoryId,
            "productDetails.categoryId": categoryId,
            "productDetails.brand": brand
        }, { productDetails: 1 }).toArray((err, array) => {
            if (array.length > 0)
                res.send(array);
            else
                res.send({
                    "message": "Item Not Found"
                })
        })
    })
})

//export the router
module.exports = router;