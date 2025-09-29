import PostCard from "../../components/PostCard/PostCard";
import {
  useGetPostsByIdQuery,
  useGetPostsQuery,
} from "../../redux/features/api/baseApi";

const Home = () => {
  const { data: posts } = useGetPostsQuery();
  const { data: post } = useGetPostsByIdQuery(1);
  console.log(post);
  return (
    <div>
      <h1 className="text-3xl font-bold py-3 text-zinc-200 text-center">
        Home
      </h1>
      <div className="xl:w-[1280px] lg:w-[1080px] mx-auto text-zinc-300">
        {posts?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
