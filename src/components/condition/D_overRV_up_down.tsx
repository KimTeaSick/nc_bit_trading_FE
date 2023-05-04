import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const D_overRV_up_down = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>이격도 기준값 이상 이하</div>
      <div className="flex gap-2">
        <SelectBox width={70} /> 주기
        <Input width={70} type="number" /> 봉전 기준
      </div>
      <div className="flex gap-2">
        기간
        <Input width={70} type="number" />
        이격도
        <Input width={70} type="number" />
        <SelectBox width={70} />
      </div>
    </div>
  );
};

export default D_overRV_up_down;
