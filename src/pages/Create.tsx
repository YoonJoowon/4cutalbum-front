import styled from 'styled-components';
import BackIcon from '@Assets/icons/BackIcon';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ROUTES_PATH } from '@Constants/routes';
import Input from '@Components/common/Input';

const Create = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isSubTitleEmpty, setIsSubTitleEmpty] = useState(false);
  const [selectedCoverId, setSelectedCoverId] = useState<number | null>(null);
  const navigate = useNavigate();

  const resetTitle = () => setTitle('');
  const resetSubTitle = () => setSubTitle('');
  const toHome = () => navigate(ROUTES_PATH.home);

  const handleSubmit = async () => {
    let hasError = false;

    if (title.trim() === '' || title === '필수 입력입니다.') {
      setTitle('필수 입력입니다.');
      setIsTitleEmpty(true);
      hasError = true;
    }

    if (subTitle.trim() === '' || subTitle === '필수 입력입니다.') {
      setSubTitle('필수 입력입니다.');
      setIsSubTitleEmpty(true);
      hasError = true;
    }

    if (hasError) return;

    try {
      const response = await axios.post(
        'https://port-0-cutalbum-back-jvpb2alnz8cuvj.sel5.cloudtype.app/user/album/write',
        null,
        {
          params: {
            title: title,
            subTitle: subTitle,
            coverIndex: selectedCoverId || 0,
          },
        },
      );
      console.log(response.data);
      toHome();
    } catch (error) {
      console.error('An error occurred while sending the request:', error);
    }
  };

  return (
    <S.DefaultLayout>
      <S.CreateLayout>
        <S.Header>
          <div onClick={toHome}>
            <BackIcon color="#666666" width="20" height="20" />
          </div>
          <S.HeaderTitle onClick={handleSubmit}>완료</S.HeaderTitle>
        </S.Header>
        <S.Content>
          <div>
            <S.H2>앨범 커버</S.H2>
            <S.Cover>
              {[0, 1, 2, 3, 4].map((id) => (
                <S.CoverDiv
                  key={id}
                  $isSelected={selectedCoverId === id}
                  onClick={() => setSelectedCoverId(id)}
                  style={{
                    width: '15.9375rem',
                    height: '18.8125rem',
                    background: '#D9D9D9',
                  }}
                ></S.CoverDiv>
              ))}
            </S.Cover>
          </div>

          <Input
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            resetValue={resetTitle}
            placeholder="앨범명"
            label="앨범명"
            $hasError={isTitleEmpty}
            onFocus={() => {
              if (title === '필수 입력입니다.') {
                setTitle('');
              }
              setIsTitleEmpty(false);
            }}
          />

          <Input
            value={subTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubTitle(e.target.value)}
            resetValue={resetSubTitle}
            placeholder="부제목"
            label="부제목"
            $hasError={isSubTitleEmpty}
            onFocus={() => {
              if (subTitle === '필수 입력입니다.') {
                setSubTitle('');
              }
              setIsSubTitleEmpty(false);
            }}
          />
        </S.Content>
      </S.CreateLayout>
    </S.DefaultLayout>
  );
};

export default Create;

const S = {
  DefaultLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: antiquewhite;
  `,
  CreateLayout: styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    max-width: 768px;
    @media screen and (max-width: 768px) {
      //768px 이하일 때
    }
  `,
  Header: styled.div`
    width: 100%;
    height: 106px;
    padding: 10px 17px 10px 21px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
      height: 52px;
    }
  `,
  HeaderTitle: styled.span`
    font-size: 2rem;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 30px 20px 0 20px;
  `,
  H2: styled.h2`
    font-size: 2.5625rem;
    font-weight: 600;
    margin-bottom: 1.02rem;
  `,
  Cover: styled.div`
    display: flex;
    gap: 1.15rem;

    overflow-x: scroll;
  `,
  CoverDiv: styled.div<{ $isSelected?: boolean }>`
    border: ${(props) => (props.$isSelected ? '3px solid blue' : 'none')};
    transition: border 0.3s;

    &:hover {
      cursor: pointer;
    }
  `,
  InputContainer: styled.div`
    margin-bottom: 4.1rem;
    position: relative;
  `,
};
