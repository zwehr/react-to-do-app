import React, {Component} from 'react';

class AddProject extends Component {
  render() {
    return (
      <div>
        <h2>What do you need to do today?</h2>
        <form>
          <input type="text" ref="task" placeholder="Enter a task here" />
          <input type="submit" value="Add to list" />
        </form>
      </div>
    );
  }
}

export default AddProject;
