import { ROUTES_PATH } from '@Constants/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  return (
    <>
      <LoginLayout>
        <Logo>4CUS</Logo>
        <InfoText>설명글</InfoText>
        <BackgroundImage></BackgroundImage>

        <Link to={ROUTES_PATH.main}>
          <StartBtn>시작하기</StartBtn>
        </Link>
      </LoginLayout>
    </>
  );
};

export default Login;

export const LoginLayout = styled.div`
  width: 768px;
  height: 1662px;
  border: solid 1px black;
  margin: auto;
  position: relative;
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
  font-size: 41px;
  font-weight: 600;
  line-height: 49px;
  letter-spacing: 0em;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
`;
