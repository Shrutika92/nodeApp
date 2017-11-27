var express = require("express");
var app = express();
var port = 3000;
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://shrutika:ishan92@ds251985.mlab.com:51985/shrutika_app", { useMongoClient: true });
var nameSchema = new mongoose.Schema({
    uname: String,
    psw: String
});
var User = mongoose.model("User", nameSchema);

app.get("*", (req, res) => {

    res.sendFile(path.resolve(__dirname + "/../../frontend/index.html"));
});r
app.post("/addname", (req, res) => {
    User.find({ 
        'uname': req.body.uname,
        'psw':req.body.psw }, function(err, user) {
          // hanlde err..
          if (user.length) {
            res.send("user exists");
          } else {
            User.create({
                uname: req.body.uname,
                psw: req.body.psw,
        
            }, function (err, user) {
                if (err)
                    res.send(err);
                else {   
                        res.json("ok");
                    }
                });
        
          }
       });
   
});
app.listen(port, () => {
    console.log("sbdjbhfh");
});