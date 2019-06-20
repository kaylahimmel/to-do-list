import React from 'react';
import {UID} from 'react-uid';

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
      // id: {uid(item)},
      text: this.state.text,
      complete: false
    });
  }

  render() {
    return (
      <div className="formWrapper">
        <form onSubmit={this.handleSubmit}>
          <UID>
            {id => (
              <React.Fragment>
                <label htmlFor={id}>
                  What do you need to do today?
                </label>
                <input 
                  type="input"
                  id={id}
                  name="text"  
                  value={this.state.text}
                  onChange={this.handleChange}
                  placeholder="I need to..." 
                />
              </React.Fragment>
            )}
          </UID>
          <button>
            Add Task
          </button>
        </form>
      </div>
    )
  }
}