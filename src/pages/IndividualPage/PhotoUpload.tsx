import React, { useState, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PhotoUpload = () => {
  
  const [imgURL, setimgURL] = useState("");
  const [file, setFile] = useState<FileList | null>();
  const imgUploadInput = useRef<HTMLInputElement | null>(null);

  const SelectImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files);

      const newimgURL = URL.createObjectURL(e.target.files[0]);
      setimgURL(newimgURL);
    }
  };

  // 서버에 데이터를 보내는 거잖아요.
  // 1. submitHandler 함수 ()
  // 2. => useSubmit() =>

  // 커스텀 훅 만드는것을 일단 보류
  const SubmitHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 서버통신
    const formData = new FormData();

    if (file) {
      formData.append("file", file[0]);

      try {
        const response = await axios.post("/api/upload", formData, {
          headers: { "content-type": "multipart/form-data" },
        });
      } catch (error: any) {
        console.log("이미지업로드 에러 발생");
        throw new Error(error);
      }
    } else {
      alert("업로드할 이미지가 없습니다");
    }
  };
  return (
    <>
      <SImgInput
        type="file"
        id="img"
        accept="image/*"
        required
        ref = {imgUploadInput}
        onChange = {SelectImg} />

      <button type="button" onClick={(e) => {
          e.preventDefault();
          if (imgUploadInput.current) {
            imgUploadInput.current.click();
          }}}> 이미지 변경 버튼 </button>

    </>
  );
};

const SImgInput = styled.input`
  display: none;
`

export default PhotoUpload;