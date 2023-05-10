import { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface SelectionProps {
  width: number;
  value?: string;
  itemList: any[];
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

const SelectBox: FC<SelectionProps> = ({ width, itemList, event, value }) => {
  return (
    <Select width={width} onChange={event} value={value || undefined}>
      {itemList?.map((item: any, index) => (
        <option value={item?.idx} key={index}>
          {item?.name}
        </option>
      ))}
    </Select>
  );
};

export const TermSelectBox: FC<SelectionProps> = ({
  width,
  itemList,
  event,
  value,
}) => {
  return (
    <Select width={width} onChange={event} value={value}>
      {itemList?.map((item: any, index) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export default SelectBox;
