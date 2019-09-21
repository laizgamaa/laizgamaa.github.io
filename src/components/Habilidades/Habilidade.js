import React from 'react';
import "./Habilidades.css";


class Habilidade extends React.Component{
    render(){
        return(
            <div className="habilidade-container">
                {/* Nome habilidade */}
                <div className="lang">{this.props.nome}</div>
                
                <div className="barrinha-container">
                    <div className="preenchimentoBarrinha" style={{flex: this.props.porcentagem}} />
                

                {/* Parte que falta */}
                    <div style={{flex: 100 - this.props.porcentagem}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default Habilidade;