import { get } from "../helpers/api-helpers";

/**
 * Get all posts
 */
export const getPosts = async () =>
  await get("/posts", {});