import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost } from "@interfaces";

export const tableApi = createApi({
  reducerPath: "tableApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query() {
        return "/posts";
      },
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (body) => ({
        url: "/posts/",
        method: "POST",
        body,
      }),
    }),
    editPost: builder.mutation<IPost[], IPost>({
      query: (body) => ({
        url: "/posts/",
        method: "PUT",
        body,
      }),
    }),
    deletePost: builder.mutation<IPost[], number>({
      query: (id) => ({
        url: `/posts/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useEditPostMutation,
  useDeletePostMutation,
} = tableApi;
