//Sets up the main structure of an application with routing for different pages.

//Imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';


// Wrapping the entire application in the AuthProvider to make authentication context available throughout the app.
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </Router>
  );
}

export default App;
