import React, {Component} from 'react';

class AddToDo extends Component {
  constructor() {
    super();
    this.state = {
      newToDo: ""
    }
  }

  handleSubmit(e) {
    if (this.refs.toDo.value === "") {
      alert("Please type a to-do item.");
    } else {
      this.setState({
        newToDo: this.refs.toDo.value
      }, function() {
        this.props.addToDo(this.state.newToDo);
      })
    }
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>What do you need to do today?</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input className="user-text" type="text" ref="toDo" placeholder="Enter a task here" />
          <input className="add-button" type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default AddToDo;
