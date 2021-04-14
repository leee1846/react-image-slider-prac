import Styled from "styled-components";

export const Container = Styled.div`
  margin-top:50px;
`;

export const Slider = Styled.div`
  position:relative;
  max-width:70vw;
  height:500px;
  display:flex;
  /* overflow:hidden; */
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

export const ArrowBox = Styled.div`
  position:absolute;
  left:0;
  top:0;
  /* background-color:blue; */
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
