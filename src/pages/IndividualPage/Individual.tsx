import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useImageUpload from '@Pages/IndividualPage/hooks/useImageUpload';
import People from '@Assets/icons/People';
import color from '@Styles/color';
import Down from '@Assets/icons/Down';
import PreArrow from '@Assets/icons/PreArrow';
// import sampleImg from './image.jpeg';

const Individual = () => {
  const { file, imgURL, selectImg, onSubmit, isImgUpload } = useImageUpload();
  const imgUploadInput = useRef<HTMLInputElement | null>(null);
  const [push, setPush] = useState<number>(0);
  const [isUploaded, setIsUploaded] = useState(true);

  const handleImgClick = () => {
    imgUploadInput.current?.click();
  };

  return (
    <Layout>
      <None />

      <Header>
        <LeftBtn>
          <PreArrow color={color.gray[700]} />
        </LeftBtn>

        <RightBtn>
          {isImgUpload ? (
            <>
              <DownIcon isUploaded color={color.gray[700]} />
              <People color={color.gray[700]} />
            </>
            ) : (
            <>
              <DownIcon color={color.gray[400]} />
              <People color={color.gray[700]} />
            </>
          )}
        </RightBtn>
      </Header>

      <Content>
        <input
          type="file"
          accept="image/*"
          required
          ref={imgUploadInput}
          onChange={selectImg}
          style={{ display: 'none' }}
        />

        {isImgUpload ? (
          <SampleImg src={imgURL} />
            ) : (
          <Info>사진을 추가해주세요</Info>
          )}
      </Content>

      <PlusLikeBtn>
        {isImgUpload && (
          <Heart onClick={() => {setPush(push + 1)}}>
            <TouchIcon>🩷{push}</TouchIcon>
          </Heart>
        )}
      </PlusLikeBtn>

      <BtnWrap>
        <Button onClick={isImgUpload ? onSubmit : handleImgClick}>
          {isImgUpload ? '꾸미기' : '사진 업로드'}
        </Button>
      </BtnWrap>
      
    </Layout>
  );
};

const Layout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F6F6F6;
`;

const Header = styled.div`
  width: 375px;
  max-width: 768px;
  height: 52px;
  background-color: white;
  display: flex;  
  justify-content: space-between;
  align-items: center;
`;

const None = styled.div`
  width: 375px;
  height: 44px;
  background-color: white;
`;

const LeftBtn = styled.div`
  display: flex;
  align-items: center;
  width: 32px;
  height: 32px;

  &:hover {
    cursor: pointer;
  }
`;

const DownIcon = styled(Down)<{ isUploaded?: boolean }>`
  color: ${props => (props.isUploaded ? color.gray[700] : color.gray[400])};

  &:hover {
    cursor: ${props => (props.isUploaded ? 'pointer' : 'default')};
    color: ${props => (props.isUploaded ? color.gray[600] : color.gray[400])};
  }
`;

const RightBtn = styled.div`
  display: flex;  
  align-items: center;
  width: 32px;
  height: 32px;
  margin-right: 80px;

  &:hover {
    cursor: pointer;
  }

  ${DownIcon}:hover {
    cursor: default;
  }
`;

const Content = styled.div`
  width: 375px;
  height: 450px;
  background-color: #F6F6F6;
`;

const Info = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
`;

const SampleImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0px auto;
`;

const PlusLikeBtn = styled.div`
  width: 375px;
  height: 56px;
  background-color: white;
  position: relative;
  display: flex;     
  justify-content: flex-end;  
  align-items: center;
`;

const Heart = styled.div`
  width: 85px;
  height: 35px;
  border-radius:20px;
  border: 1px solid black;
  margin-right: 5px;

  &:hover {
    background-color: #cf8080;
    cursor: pointer;
  }
`;

const TouchIcon = styled.div`
  font-size: 18px;
  margin-left: 7px;
  margin-top: 2px;
`;

const BtnWrap = styled.div`
  width: 375px;
  height: 126px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 333px;
  height: 52px;
  background-color: ${color.primary};
  font-size: 20px;
`;

const ImgUpload = styled.img`
  width: 80%;
`;

const ImgInput = styled.input`
  display: none;
`;

export default Individual;
