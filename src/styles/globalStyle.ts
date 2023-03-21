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
  /* display: flex; */
  .sidebar_section {
    height: 80vh;
  }
`;

export const PageWapper = styled.div`
  padding: 35px;
  max-width: 100vw;
  min-height: 80vh;
  border-radius: 35px;
  background-color: #e0e2e8;
  p {
    font-size: 32px;
    font-weight: bold;
    color: ${globalColor.pointColor};
  }
`;

interface InputProps {
  width: number;
}

export const Input = styled.input`
  width: ${(props: InputProps) => props.width}px;
  color: #000;
  height: 25px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
`;
