import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const D_trend = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>이격도 추세</div>
      <div className="flex gap-2">
        <SelectBox width={70} /> 주기
        <Input width={70} type="number" /> 봉전 기준
      </div>
      <div className="flex gap-2">
        기간
        <Input width={70} type="number" />
        이격도
        <Input width={70} type="number" />
        봉 연속
        <SelectBox width={70} />
      </div>
    </div>
  );
};

export default D_trend;
