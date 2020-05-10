import React, { Component } from 'react';
import Tarefa from './tarefa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class Tarefas extends Component {
  state = {
    novaTarefa: '',
  };

  render() {
    return (
      <div>
        <h2>Tarefas</h2>
        {this.listaDeTarefas()}
        <form
          className="form-inline mt-4"
          onSubmit={(e) => {
            this.props.onAdiciona(this.state.novaTarefa);
            this.setState({ novaTarefa: '' });
            e.preventDefault();
          }}
        >
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.novaTarefa}
              onChange={(e) => this.setState({ novaTarefa: e.target.value })}
            />
            <span className="input-group-append">
              <button className="btn btn-secondary" type="submit">
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </span>
          </div>
        </form>
      </div>
    );
  }

  listaDeTarefas() {
    const { tarefas } = this.props;
    return (
      tarefas.length > 0 && (
        <ul className="list-group mt-4">
          {tarefas.map((t, i) => (
            <Tarefa
              key={t}
              descricao={t}
              onAltera={this.props.onAltera}
              onApaga={this.props.onApaga}
            />
          ))}
        </ul>
      )
    );
  }
}

export default Tarefas;