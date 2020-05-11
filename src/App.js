import React, { useState, useEffect } from 'react';
import NavBar from './components/navbar';
import Tarefas from './components/tarefas';

function App (props) {
  let t = JSON.parse(localStorage.getItem('tarefas'));
  if(!t) t=[];
  const [tarefas, setTarefas] = useState(t);
  
  //funcoes de tratamento de eventos
  const adicionaTarefa = (t) => setTarefas([...tarefas, t]);

  const alteraTarefa = (t, d) => {
    const i = tarefas.indexOf(t);
    const novaLista = [...tarefas];
    novaLista[i] = d;
    setTarefas(novaLista);
  };

  const apagaTarefa = (t) => setTarefas(tarefas.filter((tarefa) => tarefa !== t));

  useEffect(() => localStorage.setItem('tarefas', JSON.stringify(tarefas)));

  return (
    <React.Fragment>
      <NavBar pendentes={tarefas.length}/>
      <div className="container">      
        <Tarefas
          tarefas = {tarefas}
          onAdiciona = {adicionaTarefa}
          onAltera = {alteraTarefa}
          onApaga = {apagaTarefa}
        />
      </div>
    </React.Fragment>
  );  
}

export default App;
