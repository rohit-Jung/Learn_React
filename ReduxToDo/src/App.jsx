import "./App.css";
import { AddTodo, Todos } from "./components";

function App() {
  return (
    <>
      <h1 className="font-bold text-2xl m-4">Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
