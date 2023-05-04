import SelectBox from "../common/select/SelectBox";

const MASP_comparison_double = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 이동 평균 비교 2개</div>
      <div className="flex gap-2">
        <SelectBox width={70} itemList={["1일", "2일"]} />
        주기
        <SelectBox width={70} itemList={["1일", "2일"]} />
        봉전 기준
      </div>
      <div className="flex gap-2">
        <SelectBox width={70} itemList={["1일", "2일"]} />
        <SelectBox width={70} itemList={["1일", "2일"]} />
        이평
        <SelectBox width={70} itemList={["1일", "2일"]} />
        <SelectBox width={70} itemList={["1일", "2일"]} />
        <SelectBox width={70} itemList={["1일", "2일"]} />
        이평,
      </div>
      <div className="flex gap-2">
        <SelectBox width={70} itemList={["1일", "2일"]} />
        <SelectBox width={70} itemList={["1일", "2일"]} />
        이평
        <SelectBox width={70} itemList={["1일", "2일"]} />
        <SelectBox width={70} itemList={["1일", "2일"]} />
        <SelectBox width={70} itemList={["1일", "2일"]} />
        이평
      </div>
    </div>
  );
};

export default MASP_comparison_double;
