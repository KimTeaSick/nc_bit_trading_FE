import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const PageStructure = styled.div`
  width: 97vw;
  display: flex;
  gap: 2%;
  .leftSection {
    width: 75%;
  }
  .rightSection {
    width: 25%;
    .rightContent {
      padding: 10px;
      min-height: 30vh;
      background-color: #fff;
      box-sizing: border-box;
    }
    .autoSBbutton {
      width: 100%;
      color: #fff;
      height: 40px;
      border: none;
      margin-top: 15px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 5px;
      background-color: ${globalColor.buttonPointColor};
    }
  }
`;

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
  min-height: 30vh;
  max-height: 30vh;
  overflow-y: scroll;
  background-color: #fff;
  scrollbar-width: thin;
  .loading {
    width: 100%;
    min-height: 30vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  .possessionWrapper {
    min-height: 20vh;
    max-height: 20vh;
    overflow: scroll;
    background-color: #fff;
  }
  .possessionItemWrapper {
    display: grid;
    padding: 10px;
    box-sizing: border-box;
    grid-template-columns: repeat(9, 1fr);
  }
  .title {
    height: 20px;
  }
`;
