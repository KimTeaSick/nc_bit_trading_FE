import { ChangeEvent } from "react";

type Props = {
  setValue?: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const PLATFORM_LIST = [
  { key: "빗썸", value: "1" },
  { key: "업비트", value: "2" },
];

export const PlatformSelect = ({ setValue }: Props) => {
  return (
    <select onChange={setValue}>
      {PLATFORM_LIST.map((v, i) => (
        <option key={i} value={v.value}>
          {v.key}
        </option>
      ))}
    </select>
  );
};
