import { Post } from ".";
import { LoadingHOC } from "../hoc/loadingHOC";

function ListPosts({ posts }: { posts: Post[] }) {
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default LoadingHOC(ListPosts);
