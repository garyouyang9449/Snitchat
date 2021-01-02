/*
This file is the Join page, where the users enter their and will be redirected to the topics page
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


/**
 * Generate a random user name to support anonymity
 */
const RandomName = () => {

}


/**
 * The main structure of the web app. The root is the display of a list of rooms.
 */
const Rooms = () => {
    const [school, setSchool] = useState(''); 

    // can not generate a existed name in the chat room
    const name = "User" + Math.floor(Math.random() * 10);
    // const name = "User" + Math.floor(Math.random());

    return (
        <div>
            <Link to={`/chat?school=UCScamDiego&name=${name}`}>
                <button className="button mt-20" type="submit">UC Scam Diego</button>
            </Link>
            <Link to={`/chat?school=UCShatterDreams&name=${name}`}>
                <button className="button mt-20" type="submit">UC Shatter Dreams</button>
            </Link>
        </div>
        
    )
}; 

export default Rooms;