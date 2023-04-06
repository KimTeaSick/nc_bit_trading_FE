import { FC } from "react";
import styled from "styled-components";

interface SelectionProps {
  width: number;
  itemList: string[];
}

interface SelectProps {
  width: number;
}

const Select = styled.select`
  width: ${(props: SelectProps) => props.width}px;
  color: #000;
  height: 25px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
`;

const Selection: FC<SelectionProps> = ({ width, itemList }) => {
  return (
    <Select width={width}>
      {itemList.map((value, index) => (
        <option key={index}>{value}</option>
      ))}
    </Select>
  );
};

export default Selection;
