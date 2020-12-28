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
const io = socketio(server, {
    cors: {
        origin: '*'
    }
});

app.use(router); 
app.use(cors());

io.on('connection', (socket) => {

    // when a user joins
    socket.on('join', ({ school }) => {
        
    });

    socket.on('disconnect', () => {
        // const user = removeUser(socket.id);
        // a user has left the chat room
        /*
        if(user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left` })
        }
        */
        console.log("user had left");
    });
});

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));