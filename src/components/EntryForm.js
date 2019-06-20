import React from 'react';
import shortid from 'shortid';

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
    this.setState({
      text: ''
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
          <button onSubmit={this.handleSubmit}>
            Add Task
          </button>
        </form>
      </div>
    )
  }
}