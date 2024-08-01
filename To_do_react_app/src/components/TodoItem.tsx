import React, { useState } from 'react';

interface TodoItemProps {
  text: string;
  onRemove: () => void;
  onEdit: (newText: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  const handleEdit = () => {
    if (isEditing) {
      onEdit(editText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <label htmlFor={`edit_task_${text}`} className="sr-only">Edit Task</label>
          <input
            type="text"
            id={`edit_task_${text}`}
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleEdit}
            autoFocus
            placeholder="Edit your task"
          />
        </>
      ) : (
        <span>{text}</span>
      )}
      <div className="buttons">
        <button onClick={handleEdit} aria-label="Edit Task">
          <i className="fas fa-edit"></i>
        </button>
        <button onClick={onRemove} aria-label="Remove Task">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
    