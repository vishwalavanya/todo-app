// src/store/index.js
import { createStore } from 'redux';

const ADD_TASK = 'ADD_TASK';
const DELETE_TASK = 'DELETE_TASK';
const EDIT_TASK = 'EDIT_TASK';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const editTask = (id, name) => ({
  type: EDIT_TASK,
  payload: { id, name },
});

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),
        name: action.payload,
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, name: action.payload.name }
            : task
        ),
      };
    default:
      return state;
  }
};

const store = createStore(tasksReducer);

export default store;
