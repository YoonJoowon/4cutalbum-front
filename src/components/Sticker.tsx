import React from 'react';
import { STICKER_IMAGES } from '@Constants/stickerImage';

type StickerName = string;

const Sticker = (name: StickerName) => {
  return <button name={name}></button>;
};

export default Sticker;
