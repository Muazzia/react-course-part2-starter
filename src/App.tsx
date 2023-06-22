import { useState } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import Select from "./react-query/Select";

function App() {
  const [userId, setUserId] = useState<number>();

  return (
    <>
      <Select userId={userId} onSet={(id: number) => setUserId(id)} />
      <PostList userId={userId} />
    </>
  );
}

export default App;
