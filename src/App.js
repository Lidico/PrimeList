import React from 'react';
import Home from './componnents/Home';
import InputNumberState from './context/inputNumber/InputNumberState'
import AlertState from './context/alert/AlertState'

const App = () => {
  return (
    <InputNumberState>
      <AlertState >
        <Home/>
      </AlertState>
    </InputNumberState>
  );
}

export default App;
