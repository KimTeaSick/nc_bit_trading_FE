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

export const ModalBack = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
  .modalContent {
    width: 600px;
    height: fit-content;
    border-radius: 15px;
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
  "일자",
];
