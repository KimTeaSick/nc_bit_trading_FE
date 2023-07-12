import styled from "styled-components";

export const globalColor = {
  mainColor: "#359865",
  pointColor: " #10393a",
  buttonPointColor: "#F54329",
  subPointColor: "#eccb54",
  backgroundColor: " #e0e2e8",
  subBackgroundColor: " #f4f3ea",
};

export const Layout = styled.div`
  max-width: 100vw;
  .sidebar_section {
    height: 80vh;
  }
`;

export const PageWapper = styled.div`
  padding: 30px;
  max-width: 100vw;
  min-height: 80vh;
  border-radius: 35px;
  background-color: #e0e2e8;
  p {
    font-size: 30px;
    font-weight: bold;
    color: ${globalColor.pointColor};
  }
`;

interface InputProps {
  // width: number;
  height: number;
}

export const InputStyle = styled.input`
  height: ${(props: InputProps) => props.height}px;
  color: #000;
  padding: 0 0 0 10px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
`;
