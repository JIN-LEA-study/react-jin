// http://localhost:3000/blog/:slug
// 다이나믹 라우팅과 스테틱 라우팅이 같이 있을때는 스테틱 라우팅이 우선이다.

// http://localhost:3000/blog/first-post <- 스테틱 라우팅
// http://localhost:3000/blog/hello <- 다이나믹 라우팅

import { useRouter } from "next/router";

export default function Blog() {
  const router = useRouter();

  const { slug } = router.query;

  // console.log(router); // query안에 slug: "hello"라고 나타난다.

  return (
    <div>
      {/* <h1>blog/[slug]</h1> */}
      <h1>blog/{slug}</h1> 
    </div>
  );
}
