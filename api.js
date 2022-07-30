const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();
const axios = require('axios').default;
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
app.use("/", router);
 app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })


router.put("/", (req,res)=>{

})
app.post('/sendHours', async (req, res)=> {
   const result= await sql.Insert().then((data)=>{ console.log(data);res.json(data)});
  
    
     
  
   
   });
router.get('/create', function(req,res){
 
const result = sql.Select().then((data)=>{res.send(data)});

})
 
app.listen(port, () => console.log(`Server running on localhost:${port}`));