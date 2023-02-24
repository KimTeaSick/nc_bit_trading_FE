import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const CoinListWapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }
`;

export const CoinCard = styled.div`
  margin: 10px;
  width: 130px;
  height: 140px;
  display: flex;
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  background-color: #fff;
  justify-content: center;
  color: ${globalColor.pointColor};
  box-shadow: 0px 0px 2px 0px #f4f4ea;
`;
