import ListPosts from "./list-posts";
import { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from "../loading";

export interface Post {
  id: number;
  title: string;
}

export function PostComponent() {
  const [posts, setPosts] = useState<Post[]>([]);

  async function hadleGetPosts() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setTimeout(() => {
      setPosts(response.data);
    }, 3000);
  }

  useEffect(() => {
    hadleGetPosts();
  }, []);

  return (
    <div>
      <h1>POSTS</h1>
      <ListPosts posts={posts} isLoading={posts.length === 0} />
    </div>
  );
}
