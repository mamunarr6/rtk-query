import { useForm } from "react-hook-form";
import PostCard from "../../components/PostCard/PostCard";
import {
  useGetPostsQuery,
  useSetPostMutation,
} from "../../redux/features/api/baseApi";

const Home = () => {
  const { data: posts } = useGetPostsQuery();
  // const { data: post } = useGetPostsByIdQuery(1);
  // console.log(post);
  const { register, handleSubmit } = useForm();
  const [setPost, { data: postData }] = useSetPostMutation();
  console.log(postData);
  const onSubmit = (data) => {
    setPost(data);
  };
  return (
    <div className="xl:w-[1280px] lg:w-[1080px] mx-auto text-zinc-300 py-10">
      <h1 className="text-3xl font-bold py-3 text-zinc-200 text-center">
        Home
      </h1>
      <div className="bg-zinc-300 py-14 text-zinc-900">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("Enter Name")} />
          <button type="submit" className="text-zinc-900">
            Submit
          </button>
        </form>
      </div>
      <div className="">
        {posts?.map((post) => (
          <PostCard key={post?.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
