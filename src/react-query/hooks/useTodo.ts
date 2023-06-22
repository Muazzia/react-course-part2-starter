import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import apiClient from "../apiCLient/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

interface Todoquery {
  pageSize: number;
}

const useTodo = () => {
  const Fetch = () => apiClient.get<Todo[]>("/todos").then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () => Fetch(),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allpages) => {
      return lastPage.length > 0 ? allpages.length + 1 : undefined;
    },
  });

  // return useData<Todo>("todo", "/todos");
};

export default useTodo;
