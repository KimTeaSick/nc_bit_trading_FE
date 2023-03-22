import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const AccountInfoSection = styled.div`
  height: 150px;
  display: flex;
  font-size: 44px;
  border-radius: 60px;
  font-weight: bold;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0px;
  background-color: ${globalColor.backgroundColor};
  .property {
    display: flex;
  }
`;
export const AccountInfoWrapper = styled.div`
  width: 100%;
  .accountItemWrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-content: space-between;
  }
  .accountItem {
    font-size: 20px;
  }
`;
export const RTSRSection = styled.div`
  width: 100%;
  max-height: 30vh;
  overflow-y: scroll;
  background-color: #fff;
  scrollbar-width: thin;
  a {
    text-decoration: none;
  }
`;

export const RTSRWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  .RTSRItemWrapper {
    display: grid;
    padding: 10px;
    align-items: center;
    border-top: 1px solid #dcdcdc;
    justify-content: space-between;
    grid-template-columns: repeat(9, 1fr);
  }
  .RTSRItem {
    font-size: 20px;
  }
  .RTSRList :hover {
    background-color: #f8f8f8;
    cursor: pointer;
  }
`;

export const PossessionSection = styled.div`
  .possessionItemWrapper {
    max-height: 30vh;
    background-color: #fff;
  }
  .possessionItemWrapper {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    padding: 10px;
    box-sizing: border-box;
  }
`;
