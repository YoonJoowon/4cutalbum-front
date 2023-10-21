import React, { useCallback, useState,useRef }  from 'react';
import { Link } from 'react-router-dom';
import { ROUTES_PATH } from '@Constants/routes';
import PhotoUpload from './PhotoUpload';
import styled from 'styled-components';
import image from './image.jpeg';

const Individual = () => {
  const UseImageUpload = () => {
    const [file, setFile] = useState<FileList | null>(null);
    const [imgURL, setImgURL] = useState("");
  
    const selectImg = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setFile(e.target.files);
  
        const newImgURL = URL.createObjectURL(e.target.files[0]);
        setImgURL(newImgURL);
      }
    }, []);
  
    return { file, imgURL, selectImg  };
  };
  
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);
  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const { file, imgURL, selectImg } = UseImageUpload();

  return (
    <AppContainer>
      <BodyContainer>
        <Header>
          <BackLink to={ROUTES_PATH.home}>뒤로</BackLink>
          <RightLink>
            <StyledLink to={ROUTES_PATH.home}>초대</StyledLink>
            <StyledLink to={ROUTES_PATH.home}>저장</StyledLink>
          </RightLink>
        </Header>
        <StyledDiv>
          {imgURL === "" ?
            <StyledAlert>
              <Stlyedinfo>사진이 없어요ㅠ</Stlyedinfo>
              <StyledImg src={image} alt="You don't have photo!"/>
            </StyledAlert>
          :
          <StyledImg src={imgURL} alt="Upload Photo"/>
        }
        </StyledDiv>
      </BodyContainer>

      <ImgInput
        type="file"
        accept="image/*"
        required
        ref = {imgUploadInput}
        onChange = {selectImg} />

      <AddButton type="button" onClick={(e) => {
          e.preventDefault();
          if (imgUploadInput.current) {
            imgUploadInput.current.click();
          }}}> 이미지 변경 버튼 </AddButton>

      <ButtonContainer>
      </ButtonContainer>
    </AppContainer>
  );
};

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
const Header = styled.div`
  width: 375px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  margin-bottom: auto;
  border: 2px solid black;
  border-bottom: none;
  align-items: center;
`;

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
`

const RightLink = styled.div`
  display: flex;
  align-items: center;
`

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
`

const StyledImg = styled.img`
  width: 200px;
  height: 130px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px
`

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
`

export default Individual;
