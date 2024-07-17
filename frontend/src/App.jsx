import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import { CreateToDo } from "./components/CreateToDo";
import { ToDos } from "./components/ToDos";

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });

  return (
    <div>
      <CreateToDo />
      <ToDos todos={todos} />
    </div>
  );
}

export default App;
