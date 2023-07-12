import { Dispatch, FC, SetStateAction, useState } from "react";
import SearchConditionCover from "../SearchConditionCover";
import { MASPType } from "../type/condition";
import SelectBox, { CHART_TERM, COMPARISON } from "../SelectBox";
import { Input } from "@/components/common/input";
import { SearchButton } from "../Condition";
import CheckTable from "../CheckTable";

interface Props {
  data: any[] | null;
  value: MASPType;
  setValue: Dispatch<SetStateAction<MASPType>>;
}

const MASP: FC<Props> = ({ value, setValue, data }) => {
  const [resultShow, setShow] = useState(false);
  return (
    <SearchConditionCover
      title="이동평균선 비교 : "
      value={value}
      setValue={setValue}
    >
      <div className="flex justify-between flex-col md:flex-row ">
        <div className="flex items-center gap-2 text-xl flex-wrap md:flex-nowrap">
          <SelectBox
            width={"w-1/6 md:w-22"}
            value={value.chart_term}
            itemList={CHART_TERM}
            event={(e) => setValue({ ...value, chart_term: e.target.value })}
          />
          <div>차트기준</div>
          <Input
            width={"w-1/6 md:w-24"}
            value={value.first_disparity}
            onClick={() => setValue({ ...value, first_disparity: "" })}
            onChange={(e) =>
              setValue({ ...value, first_disparity: e.target.value })
            }
          />
          <div>이평선</div>
          <SelectBox
            width={"w-1/6 md:w-22"}
            itemList={COMPARISON}
            value={value.comparison}
            event={(e) => setValue({ ...value, comparison: e.target.value })}
          />
          <Input
            width={"w-1/6 md:w-24"}
            value={value.second_disparity}
            onClick={() => setValue({ ...value, second_disparity: "" })}
            onChange={(e) =>
              setValue({ ...value, second_disparity: e.target.value })
            }
          />
          <div>이평선 </div>
        </div>
        {data && data.length !== 0 && (
          <div className="flex w-full mt-2 md:mt-0 md:w-16 justify-end pr-3">
            <SearchButton event={() => setShow(!resultShow)} />
          </div>
        )}
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-2 flex w-11/12 flex-col">
          {resultShow && <CheckTable title="이평선 비교" tableData={data} />}
        </div>
      </div>
    </SearchConditionCover>
  );
};

export default MASP;
