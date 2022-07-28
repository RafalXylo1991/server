var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   
      res.end( "{cycuszki:cipeczka}" );
  

})
app.set('port', process.env.PORT || 3000);
app.listen(3000);