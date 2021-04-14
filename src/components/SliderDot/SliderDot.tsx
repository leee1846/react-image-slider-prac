import React, { useState, useEffect } from "react";
import * as Styled from "./SliderDot.style";

type SliderDotProps = {
  images: { pic: string; id: number }[];
  translateValue: number;
  moveRight: () => void;
};

const SliderDot: React.FC<SliderDotProps> = ({
  images,
  translateValue,
  moveRight,
}) => {
  const [imageIndex, setImageIndex] = useState<number>(0);

  useEffect(() => {
    setImageIndex(translateValue / 70);
    const imageInterval = setInterval(() => {
      moveRight();
    }, 3000);
    return () => {
      clearInterval(imageInterval);
    };
  }, [translateValue]);

  return (
    <Styled.DotBox>
      {images.map((picture, idx) => {
        return (
          <Styled.Dot key={picture.id} className='fas fa-circle'></Styled.Dot>
        );
      })}
      <Styled.CurrentDot
        className='fas fa-circle'
        imageIndex={imageIndex}
      ></Styled.CurrentDot>
    </Styled.DotBox>
  );
};

export default SliderDot;
