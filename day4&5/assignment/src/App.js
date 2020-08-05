import React from 'react';
import './App.css';
import Home from './components/home';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Home></Home>
    </HashRouter>
  );
}

export default App;
