import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center py-2 border-b last:border-b-0">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo._id)}
        className="mr-2"
      />
      <span
        className={`flex-grow ${
          todo.completed ? "line-through text-gray-500" : "text-gray-700"
        }`}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
