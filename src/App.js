import React, { Component } from 'react';
import AddProject from './components/AddToDo';
import ListToDos from './components/ListToDos';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: []
    }
  }

  componentWillMount() {
    this.setState({
      toDos: ["An example task. Click the 'X' to delete."]
    });
  }

  handleNewToDo(toDo) {
    let toDos = this.state.toDos;
    toDos.push(toDo);
    this.setState({
      toDos: toDos
    })
  }

  handleDeleteToDo(indexToDelete) {
    let toDos = this.state.toDos;
    toDos.splice(indexToDelete, 1);
    this.setState({
      toDos: toDos
    })
  }

  render() {
    return (
      <div className="app">
        <h1>React To-Do</h1>
        <AddProject addToDo={this.handleNewToDo.bind(this)}/>
        <ListToDos toDos={this.state.toDos} onDelete={this.handleDeleteToDo.bind(this)}/>
        <Footer />
      </div>
    );
  }
}

export default App;
