import usePostList from "./hooks/usePostList";

interface Props {
  userId: number | undefined;
}

const PostList = ({ userId }: Props) => {
  const { data: posts, error } = usePostList(userId);

  if (error) return <p>{error.message}</p>;

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
