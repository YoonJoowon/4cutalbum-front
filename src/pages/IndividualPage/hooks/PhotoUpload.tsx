import React, { useCallback, useState, useRef } from 'react';
import axios from 'axios';

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

  return { file, imgURL, selectImg };
};

export default UseImageUpload;