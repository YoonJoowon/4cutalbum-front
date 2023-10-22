import { ROUTES_PATH } from '@Constants/routes';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// SwiperCore.use([Navigation, Pagination]);

interface Album {
  id: number;
  title: string;
  subTitle: string;
  imageUrl: string;
}

const Main = () => {
  const [userAlbums, setUserAlbums] = useState<Album[]>([]);

  useEffect(() => {
    axios
      .get('https://port-0-cutalbum-back-jvpb2alnz8cuvj.sel5.cloudtype.app/user/albums')
      .then((response) => {
        setUserAlbums(response.data.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  // console.log(userAlbums);

  return (
    <>
      <MainLayout>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={40}
          slidesPerView={1.4}
          centeredSlides={true}
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
        >
          {userAlbums.length > 0 ? (
            userAlbums.map((userAlbum) => (
              <SwiperSlide key={userAlbum.id}>
                <Album>
                  <AlbumTitle>{userAlbum.title}</AlbumTitle>
                  <AlbumSubtitle>{userAlbum.subTitle}</AlbumSubtitle>
                  <AlbumBackground>
                    <Link to={ROUTES_PATH.login}>
                      <AlbumImage src={userAlbum.imageUrl} alt="앨범 이미지" />
                    </Link>
                  </AlbumBackground>
                </Album>
              </SwiperSlide>
            ))
          ) : (
            <>
              <AlbumTitle>앨범을 만들어주세요!</AlbumTitle>
              <AlbumSubtitle>4CUT</AlbumSubtitle>
              <EmptyAlbumScreen />
            </>
          )}
        </Swiper>
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
  width: 375px;
  height: 100vh;
  border: solid 1px black;
  margin: auto;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    color: #1c1c1c80;
    margin-top: 100px;
  }
`;

export const Album = styled.div`
  margin: auto;
  position: relative;
`;

export const AlbumTitle = styled.div`
  color: var(--grayscales-gray-1-c, #1c1c1c);
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  margin-top: 193px;
`;

export const AlbumSubtitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: #999999;
`;

export const AlbumBackground = styled.div`
  width: 250px;
  height: 301px;
  background-color: #d2d2d2;
  margin: 40px auto;
  padding: 10px;
  border: 2.05px solid #d2d2d2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 13.312px 24.576px 7.168px #00000012;
  border-radius: 5%;
`;

export const AlbumImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AlbumAddButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #d9d9d9;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  display: flex;
  bottom: 60px;
  left: 80%;
  transform: translateX(-50%);
  box-shadow: 0px 4px 11px 4px #9e9e9e40;

  & p {
    color: #666666;
    font-size: 50px;
  }
`;

export const EmptyAlbumScreen = styled.div`
  width: 250px;
  height: 301px;
  background-color: #d2d2d2;
  margin: 40px auto;
  padding: 10px;
  border: 2.05px solid #d2d2d2;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 26.624000549316406px 49.152000427246094px 14.336000442504883px #00000012;
`;
