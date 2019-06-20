import React from 'react';

export default props => (
  <div 
    style={{textDecoration: props.task.complete ? "line-through" : ''}}
    onClick={props.onCheckOff}
  >
    {props.task.text}
  </div>
);