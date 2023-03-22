import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const HeaderSection = styled.div`
  height: 50px;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
  justify-content: space-between;
  .buttonSection {
    gap: 20px;
    display: flex;
  }
  .homeButton {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    color: ${globalColor.pointColor};
  }
  a {
    text-decoration: none;
  }
`;
