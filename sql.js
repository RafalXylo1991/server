


const sqlite3 = require('./node_modules/sqlite3');
const { Client } = require('pg');
const { symlinkSync } = require('fs');
const client = new Client({
  host: 'ec2-50-19-255-190.compute-1.amazonaws.com',
  port: 5432,
  user: 'fqwlgpbmahxrza',
  database:'dd3ues1j43iln2',
  password: '54195ef5a658458a0a0d8bbcba325fec0b244d299e7f4ec45968b7ab406134cf',
  ssl: { rejectUnauthorized: false }
    
})

const connect=async()=>{
 
  client.connect();
  

 
 


}
    
const createTable=async(table)=>{
console.log('cipeczk')
  client.query('CREATE TABLE if not exists '+table+'(data TEXT,nadgodziny integer ,week integer, saturday integer, sunday integer );', (err, res) => {
    if (err) throw err
    console.log(res)
  
  })
}
const insertData=async(data)=>{
  console.log(typeof(data.week))
  let weekup = data.week.charAt(0);
  weekup.toUpperCase();
 let y= weekup+data.week[1,data.week.length]
  console.log(capitalizeFirstLetter("cycki"));
let x ="insert into  "+data.month+" values('"+data.data+"',"+parseInt(data.nadgodziny)+"," +(capitalizeFirstLetter(data.week)=="true"?1:0)+","+(capitalizeFirstLetter(data.saturday)=="true"?1:0)+","+(capitalizeFirstLetter(data.sunday)=="true"?1:0)+")"
  client.query(x, (err, res) => {
    
    
    if (err) throw err
   
    console.log(res)
 
  })
}
const insertData2=async(data)=>{
  console.log(typeof(data.week))
  let weekup = data.week.charAt(0);
  weekup.toUpperCase();
 let y= weekup+data.week[1,data.week.length]
  console.log(capitalizeFirstLetter("cycki"));
let x ="insert into  "+data.month+" values('"+data.data+"',"+parseInt(data.nadgodziny)+"," +(data.week=="true"?1:0)+","+(data.saturday=="true"?1:0)+","+(data.sunday=="true"?1:0)+")"
  client.query(x, (err, res) => {
    
    
    if (err) throw err
   
    console.log(res)
 
  })
}
function capitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
const getOneMonth=async(month)=>{
  return new Promise((resolve,recive)=>{
    let x ="select * from "+month;
    client.query(x, (err, res) => {
        
      
        resolve(res.rows)
       
       
        
     
      })



  })


}
const getTables=async(month)=>{
  return new Promise((resolve,recive)=>{
    let x ="SELECT * FROM pg_catalog.pg_tables WHERE schemaname != 'pg_catalog' AND schemaname != 'information_schema';"
    client.query(x, (err, res) => {
        
      
        resolve(res.rows)
       
       
        
     
      })



  })


}

const delHours=async(month,data)=>{
  return new Promise((resolve,recive)=>{
    let x ="delete from "+month+" where data="+data+"";
    console.log(x)
    client.query(x, (err, res) => {
        
      if(err){console.log(err)}
     resolve("Data was deleted...")
       
       
     
      })



  })


}
const updateHours=async(month,hours,data)=>{
  return new Promise((resolve,recive)=>{
    let x ="update "+month+" set nadgodziny="+hours+" where data="+data;
    console.log(x)
    client.query(x, (err, res) => {
        
      if(err){console.log(err)}
     resolve("Data was deleted...")
       
       
     
      })



  })


}
  
  module.exports = {connect,createTable,insertData,getOneMonth,delHours,updateHours,getTables,insertData2};
 