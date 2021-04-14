import React, { useState, useEffect } from "react";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import * as Styled from "./App.style";
import GlobalStyle from "./GlobalStyle";

const images = [
  { pic: img1, id: 1 },
  { pic: img2, id: 2 },
  { pic: img3, id: 3 },
  { pic: img4, id: 4 },
  { pic: img5, id: 5 },
];

const App = () => {
  const [translateValue, setTranslateValue] = useState<number>(0);
  const [imageIndex, setImageIndex] = useState<number>(0);

  const clickRight = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (translateValue !== 70 * (images.length - 1)) {
      setTranslateValue((prev) => prev + 70);
    } else {
      setTranslateValue(0);
    }
  };

  const clickLeft = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    if (translateValue !== 0) {
      setTranslateValue((prev) => prev - 70);
    } else {
      setTranslateValue(70 * (images.length - 1));
    }
  };

  useEffect(() => {
    setImageIndex(translateValue / 70);
  }, [translateValue]);
  return (
    <>
      <GlobalStyle />
      <Styled.Container>
        <Styled.Slider>
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
        <Styled.DotBox>
          {images.map((picture, idx) => {
            return (
              <Styled.Dot
                key={picture.id}
                className='fas fa-circle'
              ></Styled.Dot>
            );
          })}
          <Styled.CurrentDot
            className='fas fa-circle'
            imageIndex={imageIndex}
          ></Styled.CurrentDot>
        </Styled.DotBox>
      </Styled.Container>
    </>
  );
};

export default App;
