import styled from "styled-components";

export const ListSection = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const OrderList = styled.div`
  width: 95%;
  height: 30px;
  padding: 5px 15px 5px 15px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background-color: #fff;
  justify-content: space-between;
  div {
    width: 120px;
    display: flex;
    justify-content: center;
  }
`;

export const LIST_VALUE = [
  "번호",
  "코인",
  "매매",
  "코인 1개당 가격",
  "수량",
  "원",
  "수수료",
];
