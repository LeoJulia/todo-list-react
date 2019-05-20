import React from '../../node_modules/react';
import ToDoItems from './ToDoItems';
import InputToDo from './InputToDo';

import '../style/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">My Project "ToDo List"</header>
      <ToDoItems mass={[1, 2, 3, 4]} />
      <InputToDo />
    </div>
  );
}

export default App;
