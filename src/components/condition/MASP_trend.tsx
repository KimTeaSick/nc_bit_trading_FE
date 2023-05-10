import { Input } from "../common/input";
import SelectBox from "../common/select/SelectBox";

const MASP_trend = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>이동 평균 추세</div>
      <div className="flex gap-2 items-center">
        <SelectBox width={70} itemList={["1일", "2일"]} />
        주기
        <SelectBox width={70} itemList={["1일", "2일"]} />
        봉전 기준
      </div>
      <div className="flex gap-2 items-center">
        종가
        <SelectBox width={70} itemList={["1일", "2일"]} />
        이평
        <SelectBox width={70} itemList={["1일", "2일"]} />
        추세유지
        <Input width={70} type="number" /> 이상
      </div>
    </div>
  );
};

export default MASP_trend;
