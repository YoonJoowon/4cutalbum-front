import { ROUTES_PATH } from '@Constants/routes';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Album {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
}

const Main = () => {
  const [userAlbum, setUserAlbum] = useState<Album>();

  useEffect(() => {
    axios
      .get('https://port-0-cutalbum-back-jvpb2alnz8cuvj.sel5.cloudtype.app/user/albums')
      .then((response) => {
        setUserAlbum(response.data.data[0]);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  // console.log(userAlbum);

  return (
    <>
      <MainLayout>
        {userAlbum && (
          <AlbumList>
            <AlbumTitle>{userAlbum.title}</AlbumTitle>
            <AlbumSubtitle>{userAlbum.subTitle}</AlbumSubtitle>
            <Link to={ROUTES_PATH.login}>
              <Album key={userAlbum.id}>
                <AlbumImage src={userAlbum.imageUrl} alt="앨범 이미지" />
              </Album>
            </Link>
          </AlbumList>
        )}
        <Link to={ROUTES_PATH.login}>
          <AlbumAddButton>
            <p>+</p>
          </AlbumAddButton>
        </Link>
      </MainLayout>
    </>
  );
};

export default Main;

export const MainLayout = styled.div`
  width: 768px;
  height: 1662px;
  border: solid 1px black;
  margin: auto;
  position: relative;
`;

export const AlbumTitle = styled.div`
  font-size: 57px;
  font-weight: 700;
  line-height: 68px;
  letter-spacing: 0em;
  text-align: center;
`;

export const AlbumSubtitle = styled.div`
  font-size: 32px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #999999;
`;

export const AlbumList = styled.div`
  margin-top: 300px;
`;

export const Album = styled.div`
  width: 510px;
  height: 602px;
  background-color: #d2d2d2;
  margin: auto;
  padding: 20px;
  margin-top: 100px;
  border: 2.05px solid #d2d2d2;
  box-shadow: 0px 26.624000549316406px 49.152000427246094px 14.336000442504883px #00000012;
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: auto;
`;

export const AlbumAddButton = styled.button`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  display: flex;
  bottom: 200px;
  left: 80%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 11px 4px #9e9e9e40;

  & p {
    color: #666666;
    font-size: 100px;
  }
`;
