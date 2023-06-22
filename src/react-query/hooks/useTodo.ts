import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useData from "./useData";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodo = () => {
  return useData<Todo>("todo", "/todos");
};

export default useTodo;
