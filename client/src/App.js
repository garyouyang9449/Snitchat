/**
 * This file defines the structure of the web app
 */
import React from 'react';
 
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import necessary componentsRooms
import Rooms from './components/Rooms/Rooms';
import Chat from './components/Chat/Chat';
// Define the structure of the web app
const App = () => (
    <Router>
        <Route path="/" exact component={Rooms} /> 
        <Route path="/chat" exact component={Chat} /> 
    </Router>
);

export default App;