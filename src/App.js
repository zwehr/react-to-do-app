import React, { Component } from 'react';
import AddProject from "./components/AddToDo";
import ListToDos from "./components/ListToDos";
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

  render() {
    return (
      <div className="App">
        <AddProject />
        <ListToDos toDos={this.state.toDos} />
      </div>
    );
  }
}

export default App;
