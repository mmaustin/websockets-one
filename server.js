import express from 'express';
import { Server } from 'socket.io';

const app = express();

app.use(express.static('public'));
const expressServer = app.listen(3000);

//creates a socket.io server
const io = new Server(expressServer, {

});

io.on('connect', socket => {
  //console.log(socket.id);
  socket.emit('welcome', [1, 2, 3]);

  socket.on('thank you', data => {
    console.log('message from client', data);
  })
});