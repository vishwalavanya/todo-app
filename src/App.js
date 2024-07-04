// src/App.js
import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default App;
