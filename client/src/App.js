/**
 * This file defines the structure of the web app
 */
import React from 'react';
 
import { BrowserRouter as Router, Route } from 'react-router-dom';

// import necessary components
import Join from './components/Join/Join';
import Topics from './components/Topics/Topics';

// Define the structure of the web app
const App = () => (
    <Router>
        <Route path="/" exact component={Join} /> 
        <Route path="/topics" exact component={Topics} /> 
    </Router>
);

export default App;