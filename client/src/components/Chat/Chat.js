import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';
import InfoBar from '../InfoBar/InfoBar.js';
import Input from '../Input/Input.js';
import Messages from '../Messages/Messages';

let socket;

const ENDPOINT = 'localhost:5000';
socket = io(ENDPOINT);

/**
 * The basic structure of the chatroom
 * @param {location} param0 the URL parameters
 */
const Chat = ({ location }) => {
    const [school, setSchool] = useState(''); // set school to default ''
    let [name, setName] = useState(''); 
    const [messages, setMessages] = useState([]); // an array of message
    const [message, setMessage] = useState(''); // a single message

    useEffect(() => {
        const { school } = queryString.parse(location.search);

        setSchool(school);

        socket.emit('join', { school, name }, (newName) => {
            setName(name+newName);
        }); // need a callback function to set the name to the randomly generated name

        
        return () => {
            socket.emit('disconnect');
            socket.off();
        };
        
    }, [ENDPOINT, location.search]); // on endpoint and URL location change

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message ]);
        });
    }, [messages]);

    const sendMessage = (event) => {
        // check if user types a empty message
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => {
                setMessage('');
            });
        }
    }
    console.log(`after set name: ${name}`);
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar school={school}/>
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
};

export default Chat;