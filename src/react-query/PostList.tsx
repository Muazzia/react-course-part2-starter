import usePostList from "./hooks/usePostList";
import React from "react";

interface Props {
  userId: number | undefined;
}

const PostList = ({ userId }: Props) => {
  const pageSize = 10;

  const {
    data: posts,
    error,
    fetchNextPage,
    isFetching,
  } = usePostList({
    id: userId,
    pageSize,
  });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((data) => (
              <li key={data.id} className="list-group-item">
                {data.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 ms-1"
        disabled={isFetching}
        onClick={() => fetchNextPage()}
      >
        {isFetching ? "Load More" : "Loading..."}
      </button>
    </>
  );
};

export default PostList;
