import React from 'react';

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

  render() {
    return (
      <input 
        name="text"  
        value={this.state.text}
        onChange={this.handleChange}
        placeholder="I need to..." 
      />
      )
  }
}