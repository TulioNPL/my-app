import React, {Component} from 'react';
import Tarefa from './tarefa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './tarefas.css';

class Tarefas extends Component {
    state = {
        tarefas: [
            'Declarar IRPF', 'Estudar React', 'Levar o carro para revisão'
        ],
        novaTarefa: ''
    };

    render() {
        return (
            <div className="container">
                <h2>Tarefas pendentes</h2>
                <p>{this.tarefasPendentes()}</p>
                {this.listaDeTarefas()}
                <form className="form-inline mt-4" onSubmit={this.adicionaTarefa}>
                    <div className="input-group">
                        <input type="text" className="form-control" 
                            value={this.state.novaTarefa} 
                            onChange={this.trataNovaTarefa}/>
                        <span className="input-group-append">
                            <button className="btn btn-secondary"><FontAwesomeIcon icon={faPlus}/></button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }

    trataNovaTarefa = (evento) => {
        this.setState({ novaTarefa: evento.target.value });
    }

    adicionaTarefa = (evento) => {
        const newVector = [...this.state.tarefas, this.state.novaTarefa];
        this.setState({
            tarefas: newVector,
            novaTarefa: ''
        });
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
        const {tarefas} = this.state;
        return (
            (tarefas.length > 0) && (
                <ul className="list-group mt-4">
                    {this.state.tarefas.map((t,i) => (
                        <Tarefa 
                            key={i} 
                            descricao={t}
                            onAltera={this.alteraTarefa}
                            onApaga={this.apagaTarefa}
                        />
                    ))}
                </ul>
            )
        );
    }

    alteraTarefa = (t, d) => {
        const i = this.state.tarefas.indexOf(t);
        const novaLista = [...this.state.tarefas];
        novaLista[i] = d;
        this.setState({
            tarefas: novaLista
        });
    };

    apagaTarefa = (t) => {
        const novaLista = this.state.tarefas.filter(
            (tarefa) => tarefa !== t
        );
        this.setState({
            tarefas: novaLista,
        });
    };
}
export default Tarefas;