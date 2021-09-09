import { get, put, delt } from "../helpers/api-helpers";

/**
 * Get all posts
 */
export const getPosts = async () =>
  await get("/posts", {});

/**
 * Get a single post
 */
export const getPost = async (id) =>
  await get(`/posts/${id}`, {});

/**
 * Get all the comments of a specific post
 */
export const getPostComments = async (id) =>
  await get(`/posts/${id}/comments`, {});

/**
* Update a specific post
*/
export const updatePost = async (data) => {
  const postId = data;
  await put(`/posts/${postId}`, data);
}

/**
* Delete a specific post
*/
export const deletePost = async (postId) => {
  await delt(`/posts/${postId}`);
}
