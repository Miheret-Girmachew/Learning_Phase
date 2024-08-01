import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() === '') {
      alert('Please Enter Task!');
      return;
    }
    setTasks([...tasks, taskInput.trim()]);
    setTaskInput('');
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index: number, newText: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = newText;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>TO-DO LIST</h1>
      <div className="input-container">
        <label htmlFor="task_input" className="sr-only">Task</label>
        <input
          type="text"
          id="task_input"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter Your Task!"
        />
        <button onClick={handleAddTask}>
          <i className="fas fa-plus"></i> Add Task
        </button>
      </div>
      <ul id="tasks_list">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            text={task}
            onRemove={() => handleRemoveTask(index)}
            onEdit={(newText: string) => handleEditTask(index, newText)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
