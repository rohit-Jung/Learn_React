import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleEditClick = (todo) => {
    setEditMode(true);
    setEditId(todo.id);
    setEditedText(todo.text);
  };

  const handleUpdateTodo = () => {
    dispatch(updateTodo({ id: editId, text: editedText }));
    setEditMode(false);
    setEditId(null);
    setEditedText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-2 items-center">
          {editMode && editId === todo.id ? (
            <div className="flex gap-2 items-center justify-between w-full bg-slate-500 px-9 py-3 mt-4 font-semibold rounded">
              <input
                type="text"
                value={editedText}
                className="border-none outline-none rounded-lg w-full bg-slate-500"
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={handleUpdateTodo}
              >
                📁
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-center justify-between w-full bg-slate-500 px-9 py-3 mt-4 font-semibold rounded">
              <span>{todo.text}</span>
              <div className="flex gap-5 items-center justify-center">
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                  onClick={() => handleEditClick(todo)}
                >
                  ✏️
                </button>
                <button
                  className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                  onClick={() => handleRemoveTodo(todo.id)}
                >
                  ❌
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todos;
