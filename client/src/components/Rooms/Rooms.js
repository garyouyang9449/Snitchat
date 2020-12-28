/*
This file is the Join page, where the users enter their and will be redirected to the topics page
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Rooms = () => {
    const [school, setSchool] = useState(''); 
    
    return (
        <div>
            <div><input placeholder="School Name..." className="joinInput" type="text" onChange={(event) => setSchool(event.target.value)} /></div>
            <Link onClick={event => (!school) ? event.preventDefault : null} to={`/chat?school=${school}`}>
                <button className="button mt-20" type="submit">Join</button>
            </Link>
        </div>
        
    )
}; 

export default Rooms;