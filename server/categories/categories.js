var express = require("express")
var mongodb = require("mongodb")
var router = express.Router()
var mydb = require("../config/mongodb_properties")
//create the client
var client = mongodb.MongoClient;

//create the Rest API.
router.get("/", (req, res) => {
    client.connect("mongodb://localhost:27017/" + mydb.database, (err, db) => {
        db.collection(mydb.category).find().toArray((err, array) => {
            if (err instanceof Error)
                res.send({ message: err.message })
            res.send(array)
        })
    })
})

//export the router
module.exports = router;