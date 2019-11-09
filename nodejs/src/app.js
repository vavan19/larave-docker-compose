let app = require('express')
let http = require('http')
// let io = require('socket.io')(http)
let port = 3001


express = app();
const options = {
  requestCert: false,
  rejectUnauthorized: false
};

let server = http.createServer(options, express);

let io = require('socket.io')(server)

io.sockets.on('connection', function (socket) {
  socket.emit('conecction_success_client', {});
  socket.on('conecction_success_server', function(data){
    console.log(data);
  });
  socket.on('page_reload', function (data) {
    console.log('reload server');
    io.emit('page_reload', { reload: true });
  });
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

server.listen(port, () => {
  console.log("secure server started at 3001");
});
