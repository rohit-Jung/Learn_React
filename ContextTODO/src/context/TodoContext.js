import { createContext, useContext } from "react";

//creating context
export const ToDoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Some todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//providing the context through a variable
export const TodoContextProvider = ToDoContext.Provider;

//creating a custom hook to use context in other components
export const useTodoContext = () => {
  return useContext(ToDoContext);
};
