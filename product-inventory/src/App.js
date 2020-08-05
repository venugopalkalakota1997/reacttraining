import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Home from './compoents/Home';
import Navbar from './compoents/Navbar';


function App() {
  return (

    <HashRouter>
      <Navbar></Navbar>
     <Home></Home>
    </HashRouter>
  );
}

export default App;
