const PostCard = ({ post }) => {
  return (
    <div className="bg-zinc-700 my-5 py-5 px-5 rounded-2xl">
      <h1 className="text-2xl font-semibold">{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostCard;
