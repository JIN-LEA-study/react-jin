// http://localhost:3000/post <- 404 error
// http://localhost:3000/post/blabla <- PostAll
// 해당 상위 폴더 밑으로 들어오는 라우팅은 모두 all이 받을 수 있게 된다. 단, 한가지 index.js만 빼고.

import { useRouter } from "next/router";

export default function PostAll() {
  const router = useRouter();

  const { all } = router.query;

  // http://localhost:3000/post/hello/world
  console.log(router.query); // all: (2) ['hello', 'world'] <- all은 배열이다.

  return (
    <div>
      {/* <h1>PostAll</h1> */}
      <h1>Post: {all.join("/")}</h1>
      {/* Post: hello/world */}
    </div>
  );
}
