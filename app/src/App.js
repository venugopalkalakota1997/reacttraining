import React from 'react';
import './App.css';
import Firstname from'./containers/Firstname'
import Lastname from './containers/Lastname';
import Score from './containers/Score'
import Detail from './containers/Detail';

function App() {
  return (
    <span>
      <Firstname></Firstname>
      <Lastname></Lastname>
      <Score></Score>
      <Detail></Detail>
    </span>
  );
}

export default App;
