const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInSchool} = require('./Users.js');

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
    socket.on('join', ({ school, name }, callback) => {
        const { error, user } = addUser({ id: socket.id, school, name });

        if(error) {
            return callback(error);
        }
        
        socket.emit('message', {user: 'admin', text: `${user.name} welcome to ${user.school} chat room`});
        socket.broadcast.to(user.school).emit('message', {user: 'admin', text: `${user.name} has entered the chat room`});

        socket.join(user.school);

        io.to(user.school).emit('schoolData', { school: user.school, users: getUsersInSchool(user.school) })
        
        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);
        io.to(user.school).emit('message', { user: user.name, text: message });
        io.to(user.school).emit('schoolData', { school: user.school, users: getUsersInSchool(user.school) });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        // a user has left the chat room
        if(user) {
            io.to(user.school).emit('message', { user: 'admin', text: `${user.name} has left` })
        }
        console.log("user had left");
    });
});

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));