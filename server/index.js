const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

// const { addUesr, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

// instantiate sock.io server
const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router); 
app.use(cors());

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));