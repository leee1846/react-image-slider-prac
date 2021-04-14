import React, { useState } from "react";
import img1 from "./images/image1.jpg";
import img2 from "./images/image2.jpg";
import img3 from "./images/image3.jpg";
import img4 from "./images/image4.jpg";
import img5 from "./images/image5.jpg";
import * as Styled from "./App.style";
import GlobalStyle from "./GlobalStyle";
import Slider from "./components/Slider/Slider";
import SliderDot from "./components/SliderDot/SliderDot";

const App = () => {
  const images = [
    { pic: img1, id: 1 },
    { pic: img2, id: 2 },
    { pic: img3, id: 3 },
    { pic: img4, id: 4 },
    { pic: img5, id: 5 },
  ];

  const [translateValue, setTranslateValue] = useState<number>(0);

  const moveRight = (): void => {
    if (translateValue !== 70 * (images.length - 1)) {
      setTranslateValue((prev) => prev + 70);
    } else {
      setTranslateValue(0);
    }
  };

  const moveLeft = (): void => {
    if (translateValue !== 0) {
      setTranslateValue((prev) => prev - 70);
    } else {
      setTranslateValue(70 * (images.length - 1));
    }
  };

  return (
    <>
      <GlobalStyle />
      <Styled.Container>
        <Slider
          translateValue={translateValue}
          images={images}
          moveRight={moveRight}
          moveLeft={moveLeft}
        />
        <SliderDot
          images={images}
          translateValue={translateValue}
          moveRight={moveRight}
        />
      </Styled.Container>
    </>
  );
};

export default App;
