import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Tarefas from './components/tarefas';

class App extends Component {

  state = {
    tarefas: [],
  }

  constructor(props) {
    super(props);
    const t = JSON.parse(localStorage.getItem('tarefas'));
    if(t) this.state.tarefas = t;
  }

  render() {
    return (
      <React.Fragment>
        <NavBar pendentes={this.state.tarefas.length}/>
        <div className="container">      
          <Tarefas
            tarefas = {this.state.tarefas}
            onAdiciona = {this.adicionaTarefa}
            onAltera = {this.alteraTarefa}
            onApaga = {this.apagaTarefa}
          />
        </div>
      </React.Fragment>
    );  
  }

  adicionaTarefa = (t) => {
    this.setState({
        tarefas: [...this.state.tarefas, t],
    });
  };

  alteraTarefa = (t, d) => {
    const i = this.state.tarefas.indexOf(t);
    const novaLista = [...this.state.tarefas];
    novaLista[i] = d;
    this.setState({
        tarefas: novaLista
    });
  };

  apagaTarefa = (t) => {
    this.setState({
        tarefas: this.state.tarefas.filter((tarefa) => tarefa !== t),
    });
  };

  componentDidMount() {
      console.log('Component did mount: ',this.props.descricao);
  }

    componentDidUpdate() {
      localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas));
  }

    componentWillUnmount() {
      console.log('Component will unmount: ',this.props.descricao);
  }
}

export default App;
