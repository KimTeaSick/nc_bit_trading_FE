import SelectBox from "../common/select/SelectBox";

const MASP_comparison = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 이동 평균 비교</div>
      <div className="flex gap-2">
        <SelectBox width={70} itemList={["1일", "2일"]} />
        주기
        <SelectBox width={70} itemList={["1일", "2일"]} />
        봉전 기준
      </div>
      <div>
        종가 <SelectBox width={70} itemList={["1일", "2일"]} />
        이평이 종가 <SelectBox width={70} itemList={["1일", "2일"]} /> 이평을
        <SelectBox width={70} itemList={["1일", "2일"]} /> 이내에
      </div>
      <div>
        <SelectBox width={70} itemList={["1일", "2일"]} /> % 근접
      </div>
    </div>
  );
};

export default MASP_comparison;
