import React, { useState, useEffect } from "react";
import * as Styled from "./Slider.style";

type SliderProps = {
  translateValue: number;
  images: { pic: string; id: number }[];
  moveRight: () => void;
  moveLeft: () => void;
};

const Slider: React.FC<SliderProps> = ({
  translateValue,
  images,
  moveRight,
  moveLeft,
}) => {
  const [mouseDownClientX, setMouseDownClientX] = useState<number>(0);
  const [mouseUpClientX, setMouseUpClientX] = useState<number>(0);
  const [cursorOn, setCursorOn] = useState<boolean>(false);

  const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveRight();
  };

  const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    moveLeft();
  };
  const onMouseDown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseDownClientX(e.clientX);
    setCursorOn(true);
  };
  const onMouseUp = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    setMouseUpClientX(e.clientX);
    setCursorOn(false);
  };

  useEffect(() => {
    const dragSpace = Math.abs(mouseDownClientX - mouseUpClientX);

    if (mouseDownClientX !== 0) {
      if (mouseUpClientX < mouseDownClientX && dragSpace > 100) {
        moveRight();
      } else if (mouseUpClientX > mouseDownClientX && dragSpace > 100) {
        moveLeft();
      }
    }
  }, [mouseUpClientX]);

  return (
    <Styled.Slider
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      cursorOn={cursorOn}
    >
      <Styled.ImageBox
        translateValue={translateValue !== 0 ? translateValue : null}
      >
        {images.map((picture, idx) => {
          return (
            <Styled.Image
              key={picture.id}
              src={picture.pic}
              alt={"dog" + idx}
            />
          );
        })}
      </Styled.ImageBox>
      <Styled.ArrowBox>
        <Styled.Arrow
          onClick={clickLeft}
          className='fas fa-chevron-left'
        ></Styled.Arrow>
        <Styled.Arrow
          onClick={clickRight}
          className='fas fa-chevron-right'
        ></Styled.Arrow>
      </Styled.ArrowBox>
    </Styled.Slider>
  );
};

export default Slider;
