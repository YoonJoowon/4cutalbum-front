import styled from 'styled-components';
import { ReactComponent as BackIcon } from '@Pages/Create/back.svg';
import { ReactComponent as DeleteIcon } from '@Pages/Create/delete.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Create = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);

  const navigate = useNavigate();

  const resetTitle = () => setTitle('');
  const resetSubTitle = () => setSubTitle('');

  const shouldShowDeleteIcon = (text: string) => text.trim() !== '';

  const handleBackClick = () => {
    navigate('/');
  };

  const handleSubmit = async () => {
    if (title.trim() === '' || title === '필수 입력입니다.') {
      setTitle('필수 입력입니다.');
      setIsTitleEmpty(true);
      return;
    }

    try {
      const response = await axios.post(
        'https://port-0-cutalbum-back-jvpb2alnz8cuvj.sel5.cloudtype.app/user/album/write',
        {
          title: title,
          subtitle: subTitle,
          coverIndex: 0,
        },
      );

      console.log(response.data);
    } catch (error) {
      console.error('An error occurred while sending the request:', error);
    }
  };

  return (
    <S.DefaultLayout>
      <S.CreateLayout>
        <S.Header>
          <BackIcon style={{ width: '3rem', height: '3rem' }} onClick={handleBackClick} />
          <S.HeaderTitle onClick={handleSubmit}>완료</S.HeaderTitle>
        </S.Header>
        <S.Content>
          <S.H2>앨범 커버</S.H2>
          <S.Cover>
            <div
              style={{
                width: '15.9375rem',
                height: '18.8125rem',
                background: '#D9D9D9',
              }}
            ></div>
            <div
              style={{
                width: '15.9375rem',
                height: '18.8125rem',
                background: '#D9D9D9',
              }}
            ></div>
            <div
              style={{
                width: '15.9375rem',
                height: '18.8125rem',
                background: '#D9D9D9',
              }}
            ></div>{' '}
            <div
              style={{
                width: '15.9375rem',
                height: '18.8125rem',
                background: '#D9D9D9',
              }}
            ></div>{' '}
            <div
              style={{
                width: '15.9375rem',
                height: '18.8125rem',
                background: '#D9D9D9',
              }}
            ></div>
          </S.Cover>
        </S.Content>
        <S.InputContainer>
          <S.H2>앨범명</S.H2>
          <S.Input
            isError={isTitleEmpty}
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            placeholder="앨범명"
            onFocus={() => {
              if (title === '필수 입력입니다.') {
                setTitle('');
              }
              setIsTitleEmpty(false);
            }}
          />
          {shouldShowDeleteIcon(title) && (
            <S.DeleteButton onClick={resetTitle}>
              <DeleteIcon style={{ width: '1.84613rem', height: '1.84613rem' }} />
            </S.DeleteButton>
          )}
        </S.InputContainer>

        <S.InputContainer>
          <S.H2>부제목</S.H2>
          <S.Input
            value={subTitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubTitle(e.target.value)}
            placeholder="부제목"
          />
          {shouldShowDeleteIcon(subTitle) && (
            <S.DeleteButton onClick={resetSubTitle}>
              <DeleteIcon style={{ width: '1.84613rem', height: '1.84613rem' }} />
            </S.DeleteButton>
          )}
        </S.InputContainer>
      </S.CreateLayout>
    </S.DefaultLayout>
  );
};

export default Create;

type InputProps = {
  isError?: boolean;
};

const S = {
  DefaultLayout: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `,
  CreateLayout: styled.div`
    width: 48rem;
    height: 90rem;
    border: 0.5px solid black;
  `,
  Header: styled.div`
    width: 100%;
    padding: 1.25rem 2.625rem 1.3125rem 2.625rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 3.12rem;
  `,
  HeaderTitle: styled.span`
    font-size: 2rem;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2.625rem;
    margin-bottom: 4.1rem;
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
    /* &::-webkit-scrollbar {
        display: none;
    } */
  `,
  InputContainer: styled.div`
    width: 42.624rem;
    margin-left: 2.625rem;
    margin-bottom: 4.1rem;
    position: relative;
  `,
  Input: styled.input<InputProps>`
    width: 100%;
    border: none;
    height: 6rem;
    background-color: #f7f7f7;
    padding-left: 1.54rem;
    color: ${(props) => (props.isError ? 'red' : 'black')};
    border-bottom: ${(props) => (props.isError ? '2px solid red' : 'none')};
  `,
  DeleteButton: styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 1.25rem; // 오른쪽 패딩
    transform: translateY(70%); // 세로 중앙 정렬
  `,
};
