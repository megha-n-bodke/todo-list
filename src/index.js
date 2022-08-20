import './index.css';
import { addTask } from './modules/addTask.js';
import clearCompleted from './modules/clearCompleted.js';
import display from './modules/display.js';

const inputTask = document.getElementById('inputTask');
const clearBtn = document.getElementById('clearBtn');

document.addEventListener('DOMContentLoaded', () => {
  display();
});

inputTask.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
    inputTask.value = '';
  }
});

clearBtn.addEventListener('click', () => {
  clearCompleted();
});
