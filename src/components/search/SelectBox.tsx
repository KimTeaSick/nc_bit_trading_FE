import { ChangeEvent, FC } from "react";
import styled from "styled-components";

const CHART_TERM = [
  { key: "1시간", value: "1h" },
  { key: "4시간", value: "4h" },
  { key: "24시간", value: "24h" },
];

const TREND_TYPE = (use: boolean) => {
  return use
    ? [
        { key: "사용안함", value: "0" },
        { key: "사용", value: "1" },
      ]
    : [
        { key: "상승", value: "up_trend" },
        { key: "하락", value: "down_trend" },
      ];
};

const UP_DOWN = [
  { key: "이상", value: "up" },
  { key: "이하", value: "down" },
];

const COMPARISON = [
  { key: ">=", value: ">=" },
  { key: "<=", value: "<=" },
];

interface SelectionProps {
  width: number;
  value?: string;
  itemList?: any[];
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
        <option value={item?.value} key={index}>
          {item?.key}
        </option>
      ))}
    </Select>
  );
};

export { CHART_TERM, TREND_TYPE, UP_DOWN, COMPARISON };
export default SelectBox;
