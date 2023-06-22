import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../apiCLient/apiClient";

const useData = <T>(endpoint: string) => {
  const FetchTodo = () => apiClient.get<T[]>(endpoint).then((res) => res.data);

  return useQuery<T[], Error>({
    queryKey: ["todo"],
    queryFn: FetchTodo,
  });
};

export default useData;
