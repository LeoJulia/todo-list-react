import React from '../../node_modules/react';

function ToDo(props) {
  return (
    <label>
      <input type="checkbox" />
      {props.text}
    </label>
  );
}

export default ToDo;
