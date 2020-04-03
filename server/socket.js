var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  socket.on('message', function(msg){
    console.log(msg)
    // io.sockets.to(data).emit("recive message", "hello,房间中的用户");
    socket.broadcast.emit('message', msg);
  });

        // 向所有用户发送消息


});

http.listen(3000, function(){
  console.log('listening on *:3000');
});