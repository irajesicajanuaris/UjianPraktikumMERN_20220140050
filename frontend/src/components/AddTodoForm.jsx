import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTodo(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow px-3 py-2 text-gray-700 border rounded-l focus:outline-none"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-r hover:bg-blue-600 focus:outline-none"
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
