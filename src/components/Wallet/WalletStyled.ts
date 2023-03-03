import { AnyAction } from "redux";
import styled from "styled-components";

export const WalletTopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WalletSideSection = styled.div`
  height: 100px;
  font-size: 22px;
  font-weight: bold;
  border-radius: 30px;
`;

export const CoinList = styled.div`
  gap: 10px;
  display: flex;
  max-width: 360px;
  margin: 5px 0 0 5px;
  align-items: center;
  justify-content: space-between;
  div {
    min-width: 100px;
  }
`;

export const SellButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  color: #963900;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
  background-color: #eccb54;
`;
