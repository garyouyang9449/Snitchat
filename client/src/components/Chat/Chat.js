import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const ENDPOINT = 'localhost:5000';
socket = io(ENDPOINT);
const Chat = ({ location }) => {

    const [school, setSchool] = useState(''); // set school to default ''

    useEffect(() => {
        queryString.parse(location.search); // location.search: the url parameters

        setSchool(school);

        socket.emit('join', { school });

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