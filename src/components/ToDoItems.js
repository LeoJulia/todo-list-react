import React from '../../node_modules/react';
import ToDo from './ToDo';

function ToDoItems(props) {
  return props.mass.map(item => <ToDo text={item} />);
}

export default ToDoItems;
