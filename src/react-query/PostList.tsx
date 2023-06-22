import axios from "axios";
import { useEffect, useState } from "react";
import usePostList from "./hooks/usePostList";

const PostList = () => {
  const { data: posts, error } = usePostList();

  // if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {posts?.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default PostList;
