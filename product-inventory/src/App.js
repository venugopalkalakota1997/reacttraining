import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Login from './compoents/Login';
import Navbar from './compoents/Navbar';

function App() {
  return (

    <HashRouter>
      <Navbar></Navbar>
      <Login></Login>
    </HashRouter>
  );
}

export default App;
