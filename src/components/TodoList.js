import React from 'react';
import EntryForm from './EntryForm';

// MVP:
  // Make simple form for new entries
    // input area
    // 'add' or 'submit' button for the form

  // Make list area for added entries
    // each entry should have a checkbox or strikethrough for user to mark as complete
    // each entry should include the ability to delete
    
// Phase 2:
  // Styling & responsiveness
    // Add styling to entire app
    // Check and adjust styling at various viewpoint sizes
    // Check and adjust styling on various browsers

  // form updates
    // include ability to set due dates/times for each entry

  // entry updates
    // include the ability for each entry to be put back if accidentally checked off

export default class TodoList extends React.Component {
  state = {
    taskList: []
  };

  addTask = (task) => {
    this.setState({
      taskList: [task, ...this.state.taskList]
    });
  }
  render() {
    return (
      <div>
        <EntryForm onSubmit={this.addTask} />
        {this.state.taskList.map(task => (
          <div key={task.id}>{task.text}</div>))}
      </div>
    )
  }
}