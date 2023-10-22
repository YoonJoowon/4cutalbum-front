import React, { useState } from 'react';
import sampleImg from '../image.jpeg';
import axios from 'axios';

const useImageUpload = () => {
  const [file, setFile] = useState<FileList | null>(null);
  const [imgURL, setImgURL] = useState<string>(sampleImg);
  const [isImgUpload, setIsImgUpload] = useState<boolean>(false);

  const selectImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files);
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setImgURL(reader.result);
        }
      };
      setIsImgUpload(true);
    }
  };

  const onSubmit = () => {
    if (!file) {
      return alert('파일 선택하세요');
    }
    const formData = new FormData();
    formData.append('imageFile', file[0]);

    axios
      .post('https://port-0-cutalbum-back-jvpb2alnz8cuvj.sel5.cloudtype.app/user/album/1/write', formData)
      .then((res) => console.log(res))
      .catch((error) => {
        console.log(error);
      });
  };

  return { file, imgURL, selectImg, onSubmit, isImgUpload };
};

export default useImageUpload;
