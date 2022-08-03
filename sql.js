


const sqlite3 = require('./node_modules/sqlite3');
const { Client } = require('pg')
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

  client.query('CREATE TABLE '+table.August+'(NAME TEXT  NOT NULL );', (err, res) => {
    if (err) throw err
    console.log(res)
    client.end()
  })
}




  
  module.exports = {connect,createTable};
 