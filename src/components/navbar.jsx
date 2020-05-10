import React from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark mb-3">
            <span className="navbar-brand">To ferrado</span>
            <span className="navbar-text">Tarefas pendentes: {props.pendentes}</span>
        </nav>
    );
}

export default NavBar;