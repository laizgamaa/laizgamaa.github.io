import React from 'react';
import MinhaFoto from '../../images/myself.jpg';
import "./Sobre.css";

class Sobre extends React.Component{
    render(){
        return(
            <div className="sobre-mim-container">
                <div className="foto-container">
                    <img className="foto-perfil" src={MinhaFoto} alt="Foto de perfil de Laiz"></img>
                </div>

                <div>
                    <h3 className="aboutme">Sobre mim</h3>
                    <p className="ipsum">Mussum Ipsum, cacilds vidis litro abertis. Sapien in monti palavris qui num significa nadis i pareci latim. 
                        Paisis, filhis, espiritis santis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! 
                        Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
                        Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Interagi no mé, 
                        cursus quis, vehicula ac nisi. Per aumento de cachacis, eu reclamis. Mauris nec dolor in eros commodo tempor. 
                        Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                </div>
            </div>
        )
    }
}

export default Sobre;