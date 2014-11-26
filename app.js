var config = require('./config');
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/templates/index.html');
});

http.listen(config.port, function () {
  console.log('listening on *:' + config.port);
});