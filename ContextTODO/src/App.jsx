import { useEffect, useState } from "react";
import { TodoContextProvider } from "./context";
import TodoForm from "./components/TodoForm";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  //we cannot directly update the todo state here because that will overwrite all the existing ones
  //also since todo is an array of object we first extract every object in it using call back
  //and then add a todo object from parameter in it with a unique id and copy the rest as it is using spread operator
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // Function to update an existing todo with a given ID in the todos list
  const updateTodo = (id, todo) => {
    // Update todos state by mapping over the previous todos
    // If a todo with the provided ID is found, replace it with the new todo
    // Otherwise, keep the previous todo unchanged
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // Function to delete a todo with a given ID from the todos list
  const deleteTodo = (id) => {
    // Update todos state by filtering out the todo with the provided ID
    // Keep only the todos whose ID does not match the provided ID
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Function to toggle the completion status of a todo with a given ID in the todos list
  const toggleComplete = (id) => {
    // Update todos state by mapping over the previous todos
    // If a todo with the provided ID is found, toggle its completion status
    // Otherwise, keep the previous todo unchanged
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  //Using useEffect Hook to save the data in local storage so that the func invokes automatically
  useEffect(() => {
    //we convert the string to JSON as local storage saves only strings
    const todos = JSON.parse(localStorage.getItem("todos"));

    //if todos exist in local storage then updating the state
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  //using useEffect to add todos to the local storage whenever the todos are changed
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoContextProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="bg-[#172842] h-screen w-full py-10">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-10 py-10 bg-zinc-700 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div className="w-full" key={todo.id}>
                  <TodoInput todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
