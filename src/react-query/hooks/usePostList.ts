import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiCLient/apiClient";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePostList = () => {
  const Fetch = () =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["Post"],
    queryFn: Fetch,
  });
};

export default usePostList;
