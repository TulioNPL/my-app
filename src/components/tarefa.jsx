import React, { Component } from 'react';

class Tarefa extends Component {
    state = { 
        descricao: 'Tarefa'
     }

    render() { 
        return ( 
            <li className="list-group-item">{this.state.descricao}</li>
         );
    }
}
 
export default Tarefa;