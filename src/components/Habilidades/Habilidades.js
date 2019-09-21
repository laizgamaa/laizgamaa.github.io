import React from 'react';
import Habilidade from "./Habilidade";
import "./Habilidades.css";

class Habilidades extends React.Component{
    render(){
        return(
            <div className="habilidades-container">
              <Habilidade porcentagem={20} nome="React"></Habilidade>
              <Habilidade porcentagem={80} nome="HTML5"></Habilidade>
              <Habilidade porcentagem={80} nome="CSS3"></Habilidade>
              <Habilidade porcentagem={40} nome="Javascript"></Habilidade>
            </div>
        )
    }
}

export default Habilidades;