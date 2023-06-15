import { globalColor } from "@/styles/globalStyle";
import styled from "styled-components";

export const CoinDetailTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CoinDetailButtonSection = styled.div`
  gap: 5px;
  width: 100%;
  display: flex;
  margin-top: 5px;
  justify-content: center;
`;

export const CoinDetailButton = styled.button`
  width: 100px;
  height: 30px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${(props: { active: boolean }) =>
    props.active ? globalColor.buttonPointColor : "#f9f9f9"};
  color: ${(props: { active: boolean }) =>
    props.active ? "#f9f9f9" : globalColor.pointColor};
  border: 1px solid #ddddcb;
`;
