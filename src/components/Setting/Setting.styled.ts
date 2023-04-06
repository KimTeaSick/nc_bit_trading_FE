import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const SettingWrapper = styled.div`
  display: flex;
  gap: 2%;
`;

export const AvgLineSection = styled.div`
  width: 20%;
  min-width: 230px;
  padding: 10px;
  min-height: 500px;
  border-radius: 10px;
  background-color: #ededed;
  p {
    color: #10393a;
    font-size: 20px;
    font-weight: bold;
  }
  .buttonSection {
    display: flex;
    justify-content: flex-end;
  }
`;

export const AvgButton = styled.button`
  width: 60px;
  height: 45px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  background-color: ${globalColor.buttonPointColor};
`;

export const AvgLineDetailOptionSection = styled.div`
  display: flex;
  margin: 15px;
  gap: 10px;
`;

export const SearchSection = styled.div`
  width: 40%;
  padding: 10px;
  display: flex;
  min-width: 230px;
  min-height: 500px;
  border-radius: 10px;
  background-color: #ededed;
  .left {
    width: 80%;
  }
  .right {
    width: 20%;
  }
  p {
    color: #10393a;
    font-size: 20px;
    font-weight: bold;
  }
  .buttonSection {
    display: flex;
    justify-content: flex-end;
  }
  .search_content {
    .phrase {
      gap: 5px;
      display: flex;
      align-items: center;
    }
    p {
      font-size: 20px;
    }
  }
`;

export const SearchOptionListContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .list {
    width: 100%;
    display: flex;
    cursor: pointer;
    font-size: 20px;
    align-items: center;
    flex-direction: column;
  }
`;

interface PlusButtonProps {
  background: string;
}

export const PlusButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: 40px;
  line-height: 40px;
  align-items: center;
  border-radius: 30px;
  margin: 10px 0 10px 0;
  justify-content: center;
  background-size: cover;
  background-image: url(${(props: PlusButtonProps) => props.background});
`;
