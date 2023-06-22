import { useState } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import Select from "./react-query/Select";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  const [userId, setUserId] = useState<number>();

  return (
    <>
      {/* <Select userId={userId} onSet={(id: number) => setUserId(id)} /> */}
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
