import { ROUTES_PATH } from '@Constants/routes';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import loginBackground from '../image/login.png';

const Login = () => {
  return (
    <>
      <LoginLayout>
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

export const Wrapper = styled.div`
  background-color: antiquewhite;
`;

export const LoginLayout = styled.div`
  width: 375px;
  height: 100vh;
  margin: auto;
  position: relative;
  max-width: 768px;
  background-color: white;
  background-image: url(${loginBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media screen and (max-width: 768px) {
  }
`;

export const InfoText = styled.p`
  width: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  margin: auto;
  padding-top: 200px;
`;

export const BackgroundImage = styled.div``;

// hover animation
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.07);
  }
  100% {
    transform: scale(1);
  }
`;

export const StartBtn = styled.div`
  border-radius: 8px;
  background: var(--Primary, #d9d9d9);
  width: 333px;
  padding: 14px 12px;
  gap: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 70px;
  left: 5%;
  color: var(--grayscales-gray-1-c, #1c1c1c);
  font-size: 20px;
  font-weight: 600;
  transition: transform 1s ease-in-out;
  cursor: pointer;

  &:hover {
    animation: ${pulseAnimation} 1s ease infinite;
  }
`;
