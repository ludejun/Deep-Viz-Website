var express = require('express');
const compression = require('compression');
var app = express();

app.use(compression());

app.use(express.static('dist'));
app.get('*', function (req, res) {
  res.sendfile('./dist/index.html');
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
