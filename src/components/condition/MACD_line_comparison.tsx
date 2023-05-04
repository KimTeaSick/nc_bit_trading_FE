import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const MACD_line_comparison = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>MACD 기준선 비교</div>
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
      <div>
        MACD SIGNAL선
        <SelectBox width={60} />
      </div>
    </div>
  );
};

export default MACD_line_comparison;
