import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleEditClick = (todo) => {
    //setting the edit id to something so that it becomes truthy
    //also will be used to pass to updateTodo reducer while dispatching it
    setEditId(todo.id);
    //setting the edited text to display the current text on the edit part
    //also passed to updateTodo reducer to update the state at store
    setEditedText(todo.text);
  };

  const handleUpdateTodo = () => {
    //handle update todo dispatches updateTodo reducer and updates the state
    dispatch(updateTodo({ id: editId, text: editedText }));
    //then the edit id is set to null? utilizing the falsy part to update the UI accordingly
    setEditId(null);
    //the EditedText is then set to empty string to clean up the field
    setEditedText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    //since the todos is array so mapping out each todo from it
    //then checking for edit id ? to show a new input field to edit the value of text
    //sending the value from the input field to the editedText state in-order to update it when button is clicked
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex gap-2 items-center justify-between w-full bg-slate-500 px-9 py-3 mt-4 font-semibold rounded"
        >
          {editId === todo.id ? (
            <div className="flex items-center justify-around">
              <input
                type="text"
                value={editedText}
                autoFocus // Automatically focuses the input field
                className="border-none outline-none rounded-lg w-full bg-slate-500"
                onChange={(e) => setEditedText(e.target.value)}
                onBlur={handleUpdateTodo} // Update on blur (lose focus)
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleUpdateTodo(); // Update on Enter key press
                }}
              />
            </div>
          ) : (
            <span>{todo.text}</span>
          )}
          <div className="flex gap-5 items-center justify-center">
            {!editId && (
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => handleEditClick(todo)}
              >
                ✏️
              </button>
            )}
            {/* if the editId is null the code won't run if not it would */}
            {editId && (
              <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={handleUpdateTodo}
              >
                📁
              </button>
            )}
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => handleRemoveTodo(todo.id)}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
