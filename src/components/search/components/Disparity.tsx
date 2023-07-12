import { Dispatch, FC, SetStateAction, useState } from "react";
import SearchConditionCover from "../SearchConditionCover";
import { DisparityType } from "../type/condition";
import SelectBox, { CHART_TERM } from "../SelectBox";
import { Input } from "@/components/common/input";
import CheckTable from "../CheckTable";
import { SearchButton } from "../Condition";

interface Props {
  data: any[] | null;
  value: DisparityType;
  setValue: Dispatch<SetStateAction<DisparityType>>;
}

const Disparity: FC<Props> = ({ value, data, setValue }) => {
  const [resultShow, setShow] = useState(false);

  return (
    <SearchConditionCover
      title="이격도 : "
      value={value}
      setValue={setValue}
      checkDisable={true}
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
            value={value.disparity_term}
            onClick={() => setValue({ ...value, disparity_term: "" })}
            onChange={(e) =>
              setValue({ ...value, disparity_term: e.target.value })
            }
          />
          <div>이평 이격도가</div>
          <Input
            width={"w-1/6 md:w-24"}
            value={value.low_disparity}
            onClick={() => setValue({ ...value, low_disparity: "" })}
            onChange={(e) =>
              setValue({ ...value, low_disparity: e.target.value })
            }
          />
          <div>이상</div>
          <Input
            width={"w-1/6 md:w-24"}
            value={value.high_disparity}
            onClick={() => setValue({ ...value, high_disparity: "" })}
            onChange={(e) =>
              setValue({ ...value, high_disparity: e.target.value })
            }
          />
          <div>이하</div>
        </div>
        {data && data.length !== 0 && (
          <div className="flex justify-end pr-3 w-full md:w-16 mt-2 md:mt-0">
            <SearchButton event={() => setShow(!resultShow)} />
          </div>
        )}{" "}
      </div>
      <div className="flex w-full justify-center">
        <div className="mt-2 flex w-11/12 flex-col">
          {resultShow && <CheckTable title="이격도" tableData={data} />}
        </div>
      </div>
    </SearchConditionCover>
  );
};

export default Disparity;
