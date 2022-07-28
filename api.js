var express = require('express');
var app = express();
var fs = require("fs");

const port = process.env.PORT || "1337";
app.set("port", port);
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
app.get('/f', function (req, res) {
   fs.readFile("./user.json",'utf8',(err,data)=>{res.send(data)})
      
  

})
app.post('/addUser', function (req, res) {
    // First read existing users.
   console.log("cipeczka")
 })
app.listen(port, () => console.log(`Server running on localhost:${port}`));