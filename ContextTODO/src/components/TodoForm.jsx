import { useState } from "react";
import { useTodoContext } from "../context/index";

function TodoForm() {
  const { addTodo } = useTodoContext();
  const [todo, setTodo] = useState("");
  // adding the add functionality to call it on onSubmit
  const add = (e) => {
    e.preventDefault();

    //If there is no todo it will return from here itself
    if (!todo) return;

    addTodo({ todo, completed: false });
    //Updating the todo to an empty string is necessary because we are already copying the previous todo using spread operator in addTodo function
    setTodo("");
  };
  return (
    //form when submitted is given a reference of function add that will be called
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        //if there is any changes on the input field it will update the state of Todo field with the new value
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
