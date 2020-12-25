/**
 * This file defines the structure of the web app
 */
import React from 'react';
 
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import necessary componentsRooms
import Rooms from './components/Rooms/Rooms';

// Define the structure of the web app
const App = () => (
    <Router>
        <Route path="/" exact component={Rooms} /> 
    </Router>
);

export default App;