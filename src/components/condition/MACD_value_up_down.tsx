import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const MACD_value_up_down = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준값 이상 이하</div>
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
        선
        <SelectBox width={70} />
      </div>
    </div>
  );
};

export default MACD_value_up_down;
