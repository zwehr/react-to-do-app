import React, { Component } from 'react';

class ListToDos extends Component {

  deleteToDo(indexToDelete) {
    this.props.onDelete(indexToDelete);
  }

  render() {
    return (
      <ol>
        {this.props.toDos.map((toDo, i) => {
          return <li key={i}>{toDo} <a href="#" onClick={this.deleteToDo.bind(this, i)}>[X]</a></li>;
        })}
      </ol>
    )
  }
}

export default ListToDos;
