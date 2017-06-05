import React, { Component } from 'react';

class ListToDos extends Component {
  render() {
    return (
      <ol>
        {this.props.toDos.map(function(toDo, i) {
          return <li key={i}>{toDo}</li>;
        })}
      </ol>
    )
  }
}

export default ListToDos;
