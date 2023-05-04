import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const MACD_value_range = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준값 범위</div>
      <div className="flex gap-2">
        <SelectBox width={70} /> 주기
        <Input width={70} type="number" /> 봉전 기준
      </div>
      <div className="flex gap-2">
        단기
        <Input width={70} type="number" />
        장기
        <Input width={70} type="number" />
      </div>
      <div className="flex gap-2">
        MACD
        <Input width={70} type="number" />
        -
        <Input width={70} type="number" />
      </div>
    </div>
  );
};

export default MACD_value_range;
