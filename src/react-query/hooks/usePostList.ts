import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../apiCLient/apiClient";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  id: number | undefined;
  pageSize: number;
}

const usePostList = (query: PostQuery) => {
  const Fetch = (pageParam = 1) =>
    apiClient
      .get<Post[]>("/posts", {
        params: {
          userId: query.id,
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam }) => Fetch(pageParam),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allpages) => {
      return lastPage.length > 0 ? allpages.length + 1 : undefined;
    },
  });

  //   return useData<Post>("Post", id ? "/posts/" + id : "/posts", 5);
};

export default usePostList;
