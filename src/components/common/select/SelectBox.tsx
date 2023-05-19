import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { CANDLE_TIME_OPTION } from "./option";

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

export const SelectBox: FC<SelectionProps> = ({
  width,
  itemList,
  event,
  value,
}) => {
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

export const TermSelectBox: FC<SelectionProps> = ({ width, event, value }) => {
  const itemList = CANDLE_TIME_OPTION;
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

export const MorethanLessSelectBox: FC<SelectionProps> = ({
  width,
  event,
  value,
}) => {
  const itemList: ["<", ">"] = ["<", ">"];
  return (
    <Select width={width} onChange={event} value={value}>
      {itemList?.map((item: "<" | ">", index: number) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export const TrendSelectBox: FC<SelectionProps> = ({ width, event, value }) => {
  const itemList: ["상승", "하락"] = ["상승", "하락"];
  return (
    <Select width={width} onChange={event} value={value}>
      {itemList?.map((item: "상승" | "하락", index: number) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export const OverSelectBox: FC<SelectionProps> = ({ width, event, value }) => {
  const itemList: ["상향", "하향"] = ["상향", "하향"];
  return (
    <Select width={width} onChange={event} value={value}>
      {itemList?.map((item: "상향" | "하향", index: number) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </Select>
  );
};

export const UpDownSelectBox: FC<SelectionProps> = ({
  width,
  event,
  value,
}) => {
  const itemList: ["이상", "이하"] = ["이상", "이하"];

  return (
    <Select width={width} onChange={event} value={value}>
      {itemList?.map((item: "이상" | "이하", index: number) => (
        <option value={item} key={index}>
          {item}
        </option>
      ))}
    </Select>
  );
};
