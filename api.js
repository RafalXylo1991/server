const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
const port = process.env.PORT || "1337";
const router = express.Router();
app.set("port", port);
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var user = {
    "user4" : {
       "name" : "mohit",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
 app.use("/", router);
router.get('/f', function (req, res) {
   fs.readFile("./user.json",'utf8',(err,data)=>{res.send(data)})
      
  

})

router.post('/d', function(req, res) {
    const cycki = req.body;
    console.log("cipeczka")
    res.json("{answer:cycki}")
 
 });
router.post('/addUser', function (req, res) {
    // First read existing users.
   console.log(user);
   console.log(request.body);

 })
 
app.listen(port, () => console.log(`Server running on localhost:${port}`));