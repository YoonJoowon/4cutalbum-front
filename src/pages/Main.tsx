import { ROUTES_PATH } from '@Constants/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Main = () => {
  return (
    <>
      <MainLayout>
        여기는 Home입니다.
        <Title>동기즈(하트)</Title>
        <SubTitle></SubTitle>
        <Album>
          <Link to={ROUTES_PATH.hello}></Link>
        </Album>
      </MainLayout>
    </>
  );
};

export default Main;

export const MainLayout = styled.div`
  width: 768px;
  border: solid 1px black;
  height: 1662px;
  margin: auto;
`;

export const Title = styled.div`
  font-family: Pretendard;
  font-size: 57px;
  font-weight: 700;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: center;
`;

export const SubTitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Album = styled.div`
  width: 510px;
  height: 602px;
`;
