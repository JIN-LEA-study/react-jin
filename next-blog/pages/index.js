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

// export const getServerSideProps = async () => {
//   const res = await fetch(
//     `http://localhost:8080/api/posts` // 데이터를 10개로 줄여서 가져왔다.
//   );
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };

// 서버 데이터에 변화를 많이 주었지만, 새로고침 해도 변화가 없다.
// Static Side Generation을 사용했기 때문이다.
// 미리 파일을 생성, 만들어진 html을 보여주는 방식

export const getStaticProps = async () => {
  const res = await fetch(
    `http://localhost:8080/api/posts` // 데이터를 10개로 줄여서 가져왔다.
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20, // 20초
    // 20초 지난 시점부터 (언제든) 접속이 일어나면 새롭게 데이터를 받아서
    // regeneration 시킬 수 있도록 파일을 새롭게 생성할 수 있도록 명령을 주는 것
  };
};

// build를 할 때마다 페이지가 새롭게 갱신된다.
// build 타임과 데이터가 얼마나 어떤식으로 보여져야하는지를 고려해서
// ServerSideProps와 StaticProps를 번갈아가며 사용하면 된다.
