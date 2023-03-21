import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const HeaderSection = styled.div`
  height: 50px;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  .buttonSection {
    display: flex;
    gap: 20px;
  }
  .homeButton {
    cursor: pointer;
    font-weight: bold;
    font-size: 22px;
    color: ${globalColor.pointColor};
  }
`;
