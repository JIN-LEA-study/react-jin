export default function Home({ posts }) {
  // console.log(posts);
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// getServerSideProps를 사용하면 Server-Side 렌더링을 하게 되는데,
// 이 페이지에 들어올 때 마다 서버에 요청해서 데이터를 받아온다,
// 서버에서 만든 html파일으 그때그때 보여주는 방식이다.

// 서버에서 데이터가 바뀌었을때
// 바로바로 즉각적으로 빈번한 데이터의 변화가 일어나는 페이지를 만들때는
// getServerSideProps를 사용하는 것이 바람직하다.

// 하지만 NEXT.JS에서는 Static Side Generation을 추천한다.

export const getServerSideProps = async () => {
  const res = await fetch(
    `http://localhost:8080/api/posts` // 데이터를 10개로 줄여서 가져왔다.
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_start=0&_end=10` // 데이터를 10개로 줄여서 가져왔다.
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
