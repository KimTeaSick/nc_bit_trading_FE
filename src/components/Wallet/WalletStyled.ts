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
  /* background-color: #f5f7f9; */
`;

export const CoinList = styled.div`
  gap: 10px;
  width: 250px;
  display: flex;
  margin: 5px 0 0 5px;
  align-items: center;
  justify-content: space-between;
`;

export const SellButton = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: #fff;
`;
