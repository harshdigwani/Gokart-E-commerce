var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();

app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!",
                resave : true,
                saveUninitialized : true,
                cookie : {maxAge : 6000}
                }));

app.get('/', function(req, res){
   if(req.session.page_views){
      req.session.page_views++;
      console.log(req.cookies);
      console.log(req.session)
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
});
app.get('/h',function(req,res){
    if(!req.session)
    res.send("session expired")
    else
    res.send("session is present")
})
app.listen(8080);
console.log("server listening to port number 8080");
