var express = require('express');
var app = express();
var fs = require("fs");

// app.param('id', /^\d+$/);


var morgan = require('morgan');
app.use(morgan('dev'));

app.get('/v1/albums.json', function (req, res) {
  var file = JSON.parse(fs.readFileSync("./mock/photos_albums.json", "utf8"));
  res.send(file);
});

app.get('/v1/albums/:id.json', function (req, res) {
  var file = JSON.parse(fs.readFileSync("./mock/photos_albums_id.json", "utf8"));
  res.send(file);
});

var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
