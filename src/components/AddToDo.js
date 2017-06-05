import React, {Component} from 'react';

class AddToDo extends Component {
  render() {
    return (
      <div>
        <h2>What do you need to do today?</h2>
        <form>
          <input type="text" ref="toDo" placeholder="Enter a task here" />
          <input type="submit" value="Add to list" />
        </form>
      </div>
    );
  }
}

export default AddToDo;
