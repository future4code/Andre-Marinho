import React, { useState } from 'react';
import Card from './components/Card/Card';
import './App.css';
import axios from 'axios';
import { baseUrl } from './parameters';


function App() {

  return (
    <div className="App">
      <Card/>    
    </div>
  );
}

export default App;
