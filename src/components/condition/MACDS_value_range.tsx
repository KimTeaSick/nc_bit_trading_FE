import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const MACDS_value_range = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD Signal 기준값 범위</div>
      <div className="flex gap-2">
        <SelectBox width={70} /> 주기
        <Input width={70} type="number" /> 봉전 기준
      </div>
      <div className="flex gap-1">
        단기
        <Input width={60} type="number" />
        장기
        <Input width={60} type="number" />
        시그널
        <Input width={60} type="number" />
      </div>
      <div className="flex gap-1">
        MACD SIGNAL
        <Input width={60} type="number" />
        -
        <Input width={60} type="number" />
      </div>
    </div>
  );
};

export default MACDS_value_range;
