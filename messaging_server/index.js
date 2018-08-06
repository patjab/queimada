
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let users = []

app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected: ' + socket.id);

  socket.on('register', function(user){
    users.push({user: user.id, socket: socket.id})
    console.log(users);
  });

  socket.on('disconnect', function(){
    console.log('user '+socket.id+' disconnected');
    users = users.filter((i) => i.socket !== socket.id);
  });

  socket.on('friend request', function(friend_request){
    console.log("New Friend Request", friend_request);
    console.log("USERS", users);
    let dest = users.filter((i) => i.user == friend_request.user_id);

    console.log(dest)
    if(dest.length > 0){
      let token = dest[0].socket
      socket.broadcast.to(token).emit('friend request', friend_request);
    }
    // .emit("friend_request")

    // let dest = users.filter((i) => i.id == 132);
    // for(const user of dest){
    //   io.sockets.socket(friend_request(users[user.id])).emit(msg)
    // }
  });

});





http.listen(8080, function(){
  console.log('listening on *:8080');
});
