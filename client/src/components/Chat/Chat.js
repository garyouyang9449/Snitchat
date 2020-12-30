import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const ENDPOINT = 'localhost:5000';
socket = io(ENDPOINT);

/**
 * The basic structure of the chatroom
 * @param {location} param0 the URL parameters
 */
const Chat = ({ location }) => {

    const [school, setSchool] = useState(''); // set school to default ''
    const [name, setName] = useState(''); 

    useEffect(() => {
        const { school, name } = queryString.parse(location.search); // location.search: the url parameters

        setSchool(school);
        setName(name);

        socket.emit('join', { school, name });

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
        
    }, [ENDPOINT, location.search]) 

    return (
        <div>
            <h1>d</h1>
        </div>
    )
};

export default Chat;