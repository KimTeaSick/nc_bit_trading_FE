import { FC } from "react";
import SelectBox from "../common/select/SelectBox";

const MASP_disparity: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>이동평균 이격도</div>
      <div className="flex gap-2">
        <SelectBox width={70} itemList={["1일", "2일"]} />
        주기
        <SelectBox width={70} itemList={["1일", "2일"]} />
        봉전 기준
      </div>
      <div className="flex gap-2">
        단기이평 종가
        <SelectBox width={70} itemList={["1일", "2일"]} />
        장기이평 종가
        <SelectBox width={70} itemList={["1일", "2일"]} />
      </div>
      <div className="flex gap-2">
        단기 / 장기 근접
        <SelectBox width={70} itemList={["1일", "2일"]} /> % 이내
      </div>
    </div>
  );
};

export default MASP_disparity;
