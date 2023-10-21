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

        <StartBtn>
          <Link to={ROUTES_PATH.login}>시작하기</Link>
        </StartBtn>
      </LoginLayout>
    </>
  );
};

export default Login;

export const LoginLayout = styled.div`
  width: 768px;
  border: solid 1px black;
  height: 100vh;
  margin: auto;
`;

export const Logo = styled.div`
  font-size: 143px;
  font-weight: 700;
  line-height: 173px;
  letter-spacing: 0em;
  text-align: left;
  margin: auto;
  text-align: center;
`;

export const InfoText = styled.div`
  font-size: 41px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BackgroundImage = styled.div``;

export const StartBtn = styled.div`
  background: #dadada;
`;
