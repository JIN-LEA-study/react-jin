import HeadInfo from "../components/HeadInfo";
import Image from "next/image";

const photos = ({ photos }) => {
  return (
    <>
      <div>
        <HeadInfo title='My Blog Photos' />
        <h1>My Photos</h1>
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>
              <Image
                src={photo.thumbnailUrl}
                width={100}
                height={100}
                alt={photo.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// json에 이렇게 외부 URL이 들어 있을 경우
// next.config.js에서 설정을 해줘야한다.

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10` // 데이터를 10개로 줄여서 가져왔다.
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};

export default photos;
