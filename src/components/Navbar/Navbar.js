import React from 'react';
import NavbarItem from "./NavbarItem";
import "./Navbar.css";

class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar">
                <NavbarItem type="space"></NavbarItem>
                <NavbarItem type="space"></NavbarItem>
                <NavbarItem type="space"></NavbarItem>
                <NavbarItem title="Sobre mim"></NavbarItem>
                <NavbarItem title="Habilidades"></NavbarItem>
                <NavbarItem title="Projetos"></NavbarItem>
                <NavbarItem title="Contato"></NavbarItem>
            </div>
        )
    }
}

export default Navbar;