import React from 'react';
import shortid from 'shortid';

// Make simple form for new entries
  // input area
  // 'add' or 'submit' button for the form

export default class EntryForm extends React.Component {
  state = {
    text: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>
          <label>
            What do you need to do today?
          </label>
          <input 
            type="input"
            name="text"  
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="I need to..." 
          />
          <button>
            Add Task
          </button>
        </form>
      </div>
    )
  }
}