var express = require('express');
var app = express();
var fs = require("fs");
const port = process.env.PORT || "1337";
app.set("port", port);
app.get('/', function (req, res) {
   
      res.end( "{cycuszki:cipeczka}" );
  

})

app.listen(port, () => console.log(`Server running on localhost:${port}`));