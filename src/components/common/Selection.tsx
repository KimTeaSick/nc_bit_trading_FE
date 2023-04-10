import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface SelectionProps {
  width: number;
  itemList: any[];
  value?: string;
  event: (e: ChangeEvent<HTMLSelectElement>) => void;
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

const Selection: FC<SelectionProps> = ({ width, itemList, event, value }) => {
  return (
    <Select width={width} onChange={event} value={value || undefined}>
      {itemList.map((value: any, index) => (
        <option value={value?.idx} key={index}>
          {value?.name}
        </option>
      ))}
    </Select>
  );
};

export default Selection;
