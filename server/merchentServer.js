//import the express
var express = require("express");
//import body parser to name the post parameter eg uname,upass
var bodyparser = require("body-parser");
//create the rest object or api
var app = express();
// another way to use cors install cors package
//var cors = require("corrs");
const PORT = 8081;
//enable cors for the communication bte diff port number
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//set the JSON object as MIME type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

//import categories module
var categories = require('./categories/categories')
app.use("/categories", categories)

//import subCategories module
var subCategories = require('./categories/subCategories')
app.use("/sub-categories", subCategories)

//import filter module
var categoryFilter = require('./filter/categoryFilter')
app.use("/filter", categoryFilter)

//import Products module
var products = require('./products/products')
app.use("/products", products)

//import ProductDetails module
var productDetails = require('./products/productDetails')
app.use("/product-details", productDetails)

//import search module 
var search = require('./search/search')
app.use("/search", search)

//MERCHENT CONSOLE
//import merchent login
var merchentLogin = require('./merchent/login')
app.use("/merchent/login", merchentLogin)

//import merchent register module
var register = require('./merchent/register')
app.use("/merchent/register", register)

//import merchent addvertisement module
var adds = require('./merchent/adds')
app.use("/merchent/adds", adds);

//import merchent account module
var account = require('./merchent/account')
app.use("/merchent/account", account)

//assign the port number
app.listen(PORT);
console.log("Server Listening to port number " + PORT);
