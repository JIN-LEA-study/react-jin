// http://localhost:3000/post/:slug
// http://localhost:3000/post/my-blog-test

import { useRouter } from "next/router";

export default function PostAll() {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  );
}
