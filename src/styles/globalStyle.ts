import styled from "styled-components";

export const globalColor = {
  mainColor: " #359865",
  pointColor: " #10393a",
  subPointColor: "#eccb54",
  backgroundColor: " #f1f1f1",
  subBackgroundColor: " #f4f3ea",
};

export const Layout = styled.div`
  display: flex;
  .sidebar_section {
    height: 80vh;
  }
`;

export const PageWapper = styled.div`
  width: 100%;
  margin: 20px;
  padding: 45px;
  min-height: 80vh;
  margin-left: 60px;
  border-radius: 35px;
  background-color: #f4f4ea;
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
