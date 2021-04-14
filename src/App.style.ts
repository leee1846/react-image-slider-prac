import Styled from "styled-components";

export const Container = Styled.div`
  margin-top:50px;
  position:relative;
`;

export const Slider = Styled.div`
  position:relative;
  max-width:70vw;
  height:500px;
  display:flex;
  overflow:hidden;
  margin:0 auto;
`;

type ImageBoxProps = {
  translateValue: number | null;
};
export const ImageBox = Styled.div<ImageBoxProps>`
  display:flex;
  transition:1s;
  transform:${({ translateValue }) => `translateX(-${translateValue}vw)`}
`;

export const Image = Styled.img`
  width:70vw;
  object-fit:cover;
  object-position:center center;
`;

export const DotBox = Styled.div`
  position:absolute;
  left:50%;
  bottom:-30px;
  transform:translateX(-50%);
`;

export const Dot = Styled.i`
  margin:0 1px;
  font-size:20px;
`;

type CurrentDotProps = {
  imageIndex: number;
};
export const CurrentDot = Styled.i<CurrentDotProps>`
  color:dodgerblue;
  position:absolute;
  left:0;
  top:50%;
  font-size:20px;
  margin:0 1px;
  transform:${({ imageIndex }) => `translate(${imageIndex * 22}px,-50%)`};
  transition:transform .5s;
`;

export const ArrowBox = Styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px;
`;

export const Arrow = Styled.i`
  color:white;
  font-size:2rem;
  cursor:pointer;
`;
