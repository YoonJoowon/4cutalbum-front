import { ROUTES_PATH } from '@Constants/routes';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <>
      여기는 Hello이고요
      <Link to={ROUTES_PATH.home}>기본 페이지로 이동</Link>
    </>
  );
};

export default Hello;
