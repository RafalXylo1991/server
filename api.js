const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
const port = process.env.PORT || "1337";
const sql= require("./sql")
const router = express.Router();
app.set("port", port);
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

 app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })
 app.use("/", router);


router.post('/sendHours', function(req, res) {
    
   const insert = sql.Insert().then((data)=>{alert("cipeczka")});
   const result = sql.Select().then((data)=>{res.send(data)});

 
 });
router.get('/create', function(req,res){
sql.Insert();
const result = sql.Select().then((data)=>{res.send(data)});

})
 
app.listen(port, () => console.log(`Server running on localhost:${port}`));