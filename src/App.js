import React, { Component } from 'react';
import AddProject from './components/AddToDo';
import ListToDos from './components/ListToDos';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDos: []
    }
  }

  componentWillMount() {
    this.setState({toDos: [
      "An example task. Click the 'X' to delete.",
      "Example 2"
    ]
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
      <div className="App">
        <AddProject addToDo={this.handleNewToDo.bind(this)}/>
        <ListToDos toDos={this.state.toDos} onDelete={this.handleDeleteToDo.bind(this)}/>
      </div>
    );
  }
}

export default App;
