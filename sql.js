
const sqlite3 = require('./node_modules/sqlite3');

const db = new sqlite3.Database('./godziny.db');
 
    


  function CreateMonth() {
      console.log("cipeczka")
      db.serialize(() => {
      db.run("CREATE table if not exists  july(Data text, Godziny integer, Nadgodziny integer, Setki integer)");
    });
   }

  const Insert=()=> {
    return new Promise((resolve, reject) => {
      db.serialize(() => {
        db.all("insert into july values('data.data',8,8,8)", (err, rows) => {
        
          resolve("done");
        });
      });
    });
 }
  const Select=()=> {
 
  return promise;
}
const getH=async()=>{
  return new Promise((resolve, reject) => {
		db.serialize(() => {
			db.all("SELECT * from july", (err, rows) => {
			
				resolve(rows);
			});
		});
	});
  
  




}

let promise = getH() // => Promise { <pending> }

  
  module.exports = {CreateMonth,Insert,Select};
 