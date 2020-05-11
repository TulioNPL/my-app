import React, { useState } from 'react';
import Tarefa from './tarefa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Tarefas (props) {

  const [novaTarefa, setNovaTarefa] = useState('');

  return (
    <div>
      <h2>Tarefas</h2>

      {props.tarefas.length > 0 && (
        <ul className="list-group mt-4">
          {props.tarefas.map((t, i) => (
            <Tarefa
              key={t}
              descricao={t}
              onAltera={props.onAltera}
              onApaga={props.onApaga}
            />
          ))}
        </ul>
      )}

      <form
        className="form-inline mt-4"
        onSubmit={(e) => {
          props.onAdiciona(novaTarefa);
          setNovaTarefa('');
          e.preventDefault();
        }}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />
          <span className="input-group-append">
            <button className="btn btn-secondary" type="submit" disabled={novaTarefa.length === 0}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </span>
        </div>
      </form>
    </div>
  );

    
}

export default Tarefas;