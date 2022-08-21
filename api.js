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
const sql= require("./sql");
const { connect } = require("http2");
const { Console } = require("console");
const router = express.Router();
app.set("port", port);
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
 app.post('/', (req, res) => {
+    res.send('POST request to the homepage')
  })


router.get("/", (req,res)=>{

})
router.post('/sendHours', async (req, res)=> {
  const obj = Object.keys(req.body);

 
 

console.log(obj[0])
const cycki=JSON.parse(obj[0])
try{
await sql.insertData(cycki).then((result)=>{res.send("Done")})
}catch(error){res.send("failed")}
   
   
   });
router.post('/addMonth', async(req,res)=>{
  
  const obj = Object.keys(req.body);

 
    sql.createTable(obj).then((result)=>{res.send("Miesiąc został utworzony")})
  

 
})
router.get('/getOneMonth/:month', async(req,res)=>{
  console.log(req.params.month)
sql.getOneMonth(req.params.month).then((result)=>{res.json(result)})

  

 
})
router.get('/create', function(req,res){
 
const result = sql.Select().then((data)=>{res.send(data)});

})
router.delete('/deleteHours/:month/:data', function(req,res){
  console.log(req.params.data)
  console.log(req.params.month)
 sql.delHours(req.params.month,req.params.data).then(()=>{res.send("Usunięto")})
return res.status(200);
  })

 router.put('/updateHours/:month/:hours/:data', function(req,res){
  sql.updateHours(req.params.month,req.params.hours,req.params.data).then(()=>{res.send("Data was update...")})

  return res.status(200)
 }) 
 router.get('/getTables', function(req,res){
  

  return res.status(200)
 }) 
app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)
sql.connect().then(() => console.log('connected'))
.catch(err => console.error('connection error', err.stack));


});
