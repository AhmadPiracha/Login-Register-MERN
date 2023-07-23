import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';

import { } from 'react-router-dom'
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from './Components/NavBar';

function App() {
  return (

    <>
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path='/register' exact element={<Register />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/dashboard' exact element={<Dashboard />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

