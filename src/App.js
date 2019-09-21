import React from 'react';
import SobreMim from "./components/SobreMim/Sobre";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Habilidades from './components/Habilidades/Habilidades';

function App() {
  return (
    <div className="App">
      
        <Navbar></Navbar>
        <SobreMim></SobreMim>
        <Habilidades></Habilidades>
    
    </div>
  );
}

export default App;
