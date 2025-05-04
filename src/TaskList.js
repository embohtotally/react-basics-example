import React, { useState } from 'react';

function TaskList() {
  // State for managing tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);
  
  // State for new task input
  const [newTask, setNewTask] = useState('');

  // Function to add a new task
  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    setTasks([
      ...tasks,
      { id: Date.now(), text: newTask, completed: false }
    ]);
    setNewTask('');
  };

  // Function to toggle task completion
  const toggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="task-list">
      <h1>My Tasks</h1>
      
      {/* Add Task Form */}
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add Task</button>
      </form>

      {/* Task List */}
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span style={{ 
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'black'
            }}>
              {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList; 