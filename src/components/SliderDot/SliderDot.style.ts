import Styled from "styled-components";

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
