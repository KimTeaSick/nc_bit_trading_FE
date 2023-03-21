import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const SideBarSection = styled.div`
  row-gap: 3px;
  display: flex;
  position: fixed;
  min-height: 80vh;
  background-color: ${globalColor.subPointColor};
  flex-direction: column;
  justify-content: center;
`;

interface SideBarButtonProps {
  active: boolean;
}

export const SideBarButton = styled.div<SideBarButtonProps>`
  width: 50px;
  height: 50px;
  display: flex;
  cursor: pointer;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.active ? globalColor.buttonPointColor : globalColor.backgroundColor};
  &:hover {
    background-color: ${globalColor.buttonPointColor};
  }
`;
