import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const CALL_PRICE = [
  { key: "+5 호가", value: +5 },
  { key: "+4 호가", value: +4 },
  { key: "+3 호가", value: +3 },
  { key: "+2 호가", value: +2 },
  { key: "+1 호가", value: +1 },
  { key: "시장가", value: 0 },
  { key: "-1 호가", value: -1 },
  { key: "-2 호가", value: -2 },
  { key: "-3 호가", value: -3 },
  { key: "-4 호가", value: -4 },
  { key: "-5 호가", value: -5 },
];

interface SelectionProps {
  width: string;
  value?: string;
  itemList?: any[];
  event: (e: ChangeEvent<HTMLSelectElement>) => void;
}
interface SelectProps {
  width: number;
}

const Select = styled.select`
  color: #000;
  height: 25px;
  border: none;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
`;

const SelectBox: FC<SelectionProps> = ({ width, itemList, event, value }) => {
  return (
    <Select className={width} onChange={event} value={value}>
      {itemList?.map((item: any, index) => (
        <option value={item?.value} key={index}>
          {item?.key}
        </option>
      ))}
    </Select>
  );
};

export { CALL_PRICE };
export default SelectBox;
