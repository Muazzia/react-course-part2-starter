import { useQuery } from "@tanstack/react-query";
import apiClient from "../apiCLient/apiClient";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const usePostList = (id: number | undefined) => {
  const Fetch = () =>
    apiClient
      .get<Post[]>("/posts", {
        params: {
          userId: id,
        },
      })
      .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ["users", id, "posts"],
    queryFn: Fetch,
  });

  //   return useData<Post>("Post", id ? "/posts/" + id : "/posts", 5);
};

export default usePostList;
