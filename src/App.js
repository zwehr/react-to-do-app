import React, { Component } from 'react';
import AddProject from "./components/AddProject";
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
    console.log(this.state.toDos);
    return (
      <div className="App">
        <AddProject />
      </div>
    );
  }
}

export default App;
