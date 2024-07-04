// src/components/TaskList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../store';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    const newTaskName = prompt('Edit task name:');
    if (newTaskName) {
      dispatch(editTask(id, newTaskName));
    }
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <span>{task.name}</span>
          <button onClick={() => handleEdit(task.id)}>Edit</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
