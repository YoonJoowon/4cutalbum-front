import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useImageUpload from '@Pages/IndividualPage/hooks/useImageUpload';
import People from '@Assets/icons/People';
import color from '@Styles/color';
import Down from '@Assets/icons/Down';
import sampleImg from './image.jpeg';

const Individual = () => {
  const { file, imgURL, selectImg, onSubmit } = useImageUpload();
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const handleImgClick = () => {
    imgUploadInput.current?.click();
  };

  return (
    <Layout>
      <Header>
        <People color={color.gray[700]} />
        <Down color={color.gray[700]} />
      </Header>
      <Content>
        {/* 사진이 아무것도 없을때 */}
        <input
          type="file"
          accept="image/*"
          required
          ref={imgUploadInput}
          onChange={selectImg}
          style={{ display: 'none' }}
        />
        {/* 기본이미지일 때는 마우스호버하면 손모양, 이미지가 있으면 그냥 마우스 */}
        <img src={imgURL} onClick={handleImgClick} />
      </Content>
      <Button onClick={onSubmit}>사진 올리기</Button>
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
  height: 106px;
  background-color: aqua;
`;

const Content = styled.div`
  width: 100%;
  //height: 80%;
  background-color: black;
`;

const Button = styled.button`
  width: 100%;
  height: 107px;
  padding: 20px 0;
  background-color: ${color.primary};
`;

const Img = styled.img`
  &:hover {
  }
`;

// <AppContainer>
//   <BodyContainer>
//     <Header>
//       <BackLink to={ROUTES_PATH.home}>뒤로</BackLink>
//       <RightLink>
//         <StyledLink to={ROUTES_PATH.home}>초대</StyledLink>
//         <StyledLink to={ROUTES_PATH.home}>저장</StyledLink>
//       </RightLink>
//     </Header>
//     <StyledDiv>
//       {imgURL === '' ? (
//         <StyledAlert>
//           <Stlyedinfo>사진이 없어요ㅠ</Stlyedinfo>
//           <StyledImg src={image} alt="You don't have photo!" />
//         </StyledAlert>
//       ) : (
//         <StyledImg src={imgURL} alt="Upload Photo" />
//       )}
//     </StyledDiv>
//   </BodyContainer>
//
//   <ImgInput type="file" accept="image/*" required ref={imgUploadInput} onChange={selectImg} />
//
//   <AddButton
//     type="button"
//     onClick={(e) => {
//       e.preventDefault();
//       if (imgUploadInput.current) {
//         imgUploadInput.current.click();
//       }
//     }}
//   >
//     {' '}
//     이미지 변경 버튼{' '}
//   </AddButton>
//
//   <ButtonContainer></ButtonContainer>
// </AppContainer>

// styled-components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const BodyContainer = styled.div`
  width: 375px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Header
// const Header = styled.div`
//   width: 375px;
//   height: 52px;
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: auto;
//   border: 2px solid black;
//   border-bottom: none;
//   align-items: center;
// `;

// Header Button
const BackLink = styled(Link)`
  width: 64px;
  height: 19px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;

  &:hover {
    background-color: orange;
  }
`;

const RightLink = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  width: 64px;
  height: 19px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;

  &:hover {
    background-color: yellow;
  }
`;

// Body
const StyledDiv = styled.div`
  width: 375px;
  height: 650px;
  border: 2px solid black;
  postition: absolute;
`;

const StyledAlert = styled.div`
  height: 100%;
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Stlyedinfo = styled.div`
  font-size: 25px;
  font-weight: semi-bold;
  margin: 5px;
`;

const StyledImg = styled.img`
  width: 200px;
  height: 130px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const AddButton = styled.button`
  width: 333px;
  height: 52px;
  font-size: 20px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImgInput = styled.input`
  display: none;
`;

export default Individual;
