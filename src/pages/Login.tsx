import { ROUTES_PATH } from '@Constants/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  return (
    <>
      <LoginLayout>
        <Logo>LOGO</Logo>
        <InfoText>설명글</InfoText>
        <BackgroundImage></BackgroundImage>

        <Link to={ROUTES_PATH.main}>
          <StartBtn>
            <p>시작하기</p>
          </StartBtn>
        </Link>
      </LoginLayout>
    </>
  );
};

export default Login;

export const LoginLayout = styled.div`
  width: 768px;
  border: solid 1px black;
  height: 1662px;
  margin: auto;
`;

export const Logo = styled.div`
  font-size: 143px;
  font-weight: 700;
  line-height: 173px;
  letter-spacing: 0em;
  margin: auto;
  margin-top: 300px;
  text-align: center;
`;

export const InfoText = styled.p`
  width: 200px;
  text-align: center;
  font-size: 41px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0em;
  margin: auto;
`;

export const BackgroundImage = styled.div``;

export const StartBtn = styled.button`
  background: #dadada;
  width: 684px;
  height: 107px;
  position: absolute;
  bottom: 150px;
  left: 50%;
  transform: translateX(-50%); /* 가로로 가운데 정렬 */

  & p {
    font-size: 41px;
    font-weight: 600;
    line-height: 49px;
    letter-spacing: 0em;
  }
`;
