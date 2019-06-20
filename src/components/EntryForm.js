import React, { Component } from 'react';

export class EntryForm extends React.Component {
  render() {
    return (
      <div className="todoEntryWrapper">
        <form className="todoEntryForm">
          <input placeholder="What do you need to do today?">
            <button type="submit">Add it to the List</button>
          </input>
        </form>
      </div>
    )
  }
}