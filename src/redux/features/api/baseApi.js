import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build)=>({
        getPosts : build.query({
            query: ()=>"/posts",
        }),
        getPostsById: build.query({
            query: (id)=> `/posts/${id}`
        }),
        setPost: build.mutation({
            query: (post) => ({
                url: "/posts",
                method: "POST",
                body: post,
            })
        })
    })
})

export const {useGetPostsQuery, useGetPostsByIdQuery, useSetPostMutation} = baseApi;

export default baseApi;