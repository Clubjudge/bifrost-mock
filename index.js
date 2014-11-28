var express = require('express');
var app = express();
var fs = require("fs");

var morgan = require('morgan');
app.use(morgan('dev'));

var returnJson = function(file, res){
  var file = JSON.parse(fs.readFileSync(file, "utf8"));
  res.send(file);
};

app.get('/v1/albums.json', function (req, res) {
  returnJson("./mock/albums.json", res);
});

app.get('/v1/albums/:id.json', function (req, res) {
  returnJson("./mock/albums_id.json", res);
});

app.get('/v1/albums/:id/photos.json', function (req, res) {
    returnJson("./mock/albums_id_photos.json", res);
});

app.get('/v1/photos.json', function (req, res) {
    returnJson("./mock/photos.json", res);
});

app.get('/v1/photos/:id.json', function (req, res) {
    returnJson("./mock/photos_id.json", res);
});

var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});
