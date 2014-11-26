var config = require('./config');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/templates/index.html');
});

io.on('connection', function(socket) {
  console.log("Connection Established");
});

http.listen(config.port, function () {
  console.log('listening on *:' + config.port);
});