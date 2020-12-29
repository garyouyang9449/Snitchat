/*
This file is the Join page, where the users enter their and will be redirected to the topics page
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const [school, setSchool] = useState(''); 
    const user = Math.floor(Math.random() * 10);
    return (
        <div>
            <Link onClick={event => (!school) ? event.preventDefault : null} to={`/chat?school=UCScamDiego&user=${user}`}>
                <button className="button mt-20" type="submit">UC Scam Diego</button>
            </Link>
            <Link onClick={event => (!school) ? event.preventDefault : null} to={`/chat?school=UCShatterDreams&user=${user}`}>
                <button className="button mt-20" type="submit">UC Shatter Dreams</button>
            </Link>
        </div>
        
    )
}; 

export default Rooms;