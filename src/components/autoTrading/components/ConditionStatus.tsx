import { FC } from "react";

const CONDITION_STATUS_WRAPPER = "flex gap-6 text-xl font-semibold";
const CONDITION_WRAPPER = "flex items-center gap-2";
const CONDITION_NAME_STYLE_CLASS =
  "rounded-lg bg-white p-1 px-3 cursor-pointer";

interface Props {
  search_condition: string;
  trading_condition: string;
}

const ConditionStatus: FC<Props> = ({
  search_condition,
  trading_condition,
}) => {
  return (
    <div className={CONDITION_STATUS_WRAPPER}>
      <div className={CONDITION_WRAPPER}>
        <p>검색 조건 : </p>
        <p className={CONDITION_NAME_STYLE_CLASS}>{search_condition}</p>
      </div>
      <div className={CONDITION_WRAPPER}>
        <p>매매 조건·방법 : </p>
        <p className={CONDITION_NAME_STYLE_CLASS}>{trading_condition}</p>
      </div>
    </div>
  );
};

export default ConditionStatus;
