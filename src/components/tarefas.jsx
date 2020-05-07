import React, {Component} from 'react';
import './tarefas.css'
class Tarefas extends Component {
    state = {
        tarefas: [
            'Declarar IRPF',
            'Estudar React',
            'Levar o carro para revisão'
        ]
    };

    render() {
        return (
            <div className="container">
                <h2>Tarefas pendentes</h2>
                <p>{this.tarefasPendentes()}</p>
                {this.listaDeTarefas()}
                <form className="form-inline mt-4" onSubmit={this.adicionaTarefa}>
                    <div className="input-group">
                        <input id="novaTarefa" type="text" className="form-control" />
                        <button className="btn btn-secondary">+</button>
                    </div>
                </form>
            </div>
        );
    }

    adicionaTarefa = (evento) => {
        const novaTarefa = document.getElementById('novaTarefa').value;
        this.state.tarefas.push(novaTarefa);
        console.log(this.state.tarefas);
        evento.preventDefault(); //evita a pagina de ser recarregada
    };
    
    tarefasPendentes() {
        const {tarefas} = this.state;

        if(tarefas.length > 1) {
            return tarefas.length + ' tarefas pendentes.';
        } else if (tarefas.length === 1) {
            return'1 tarefa pendente.';
        } else {
            return 'Nenhuma tarefa pendente.'
        }
        
    }

    listaDeTarefas() {
        return (
            <ul className="list-group mt-4">
                {this.state.tarefas.map((t,i) => (
                    <li className="list-group-item" key={i}>
                        {t}
                    </li>
                ))}
            </ul>
        )
    }
}
export default Tarefas;