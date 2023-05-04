import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const MACDS_value_up_down = () => {
  return (
    <div className="flex flex-col gap-1">
      <div>MACD Signal 기준값 이상 이하</div>
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
        선
        <SelectBox width={60} />
      </div>
    </div>
  );
};

export default MACDS_value_up_down;
