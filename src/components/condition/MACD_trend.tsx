import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const MACD_trend = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 추세</div>
      <div className="flex gap-2">
        <SelectBox width={70} /> 주기
        <Input width={70} type="number" /> 봉전 기준
      </div>
      <div className="flex gap-2">
        MACD
        <Input width={70} type="number" />
        봉 연속
        <SelectBox width={70} />
        상승
      </div>
    </div>
  );
};

export default MACD_trend;
