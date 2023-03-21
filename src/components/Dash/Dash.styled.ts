import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

interface BackGroundImgProps {
  img: any;
}

export const BackGroundImg = styled.div`
  width: 100vw;
  min-height: 75vh;
  position: relative;
  background-size: cover;
  margin-left: calc(-50vw + 50%);
  background-image: url(${(props: BackGroundImgProps) => props.img});
`;
export const PropertySection = styled.div`
  bottom: -10%;
  width: 400px;
  height: 250px;
  display: flex;
  font-size: 44px;
  border-radius: 60px;
  font-weight: bold;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  left: calc(50vw - 200px);
  margin: 10px 0px 10px 0px;
  background-color: ${globalColor.backgroundColor};
  .property {
    display: flex;
  }
`;

export const CardSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .cardWrapper {
    width: 70%;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }
  a {
    text-decoration: none;
  }
`;
