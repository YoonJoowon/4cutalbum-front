import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@Constants/routes';

const Home = () => {
  return (
    <>
      여기는 Home입니다.
      <Link to={ROUTES_PATH.hello}>Hello 페이지로 이동</Link>
    </>
  );
};

export default Home;
