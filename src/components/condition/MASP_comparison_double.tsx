import { Dispatch, FC } from "react";
import { Input } from "../common/input";
import {
  MorethanLessSelectBox,
  TermSelectBox,
} from "../common/select/SelectBox";
import { useMASP_comparison_doubleType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MASP_com_d: useMASP_comparison_doubleType;
  setMASP_com_d: Dispatch<useMASP_comparison_doubleType>;
}

const MASP_comparison_double: FC<Props> = ({ MASP_com_d, setMASP_com_d }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 이동 평균 비교 2개</div>
      <div className="flex gap-2">
        <TermSelectBox
          width={70}
          value={MASP_com_d.term}
          event={(e) => setMASP_com_d({ ...MASP_com_d, term: e.target.value })}
        />
        주기
        <Input
          value={MASP_com_d.timing}
          width={70}
          onChange={(e) =>
            setMASP_com_d({ ...MASP_com_d, timing: e.target.value })
          }
        />
        봉전 기준
      </div>
      <div className="flex gap-2">
        종가
        <Input
          value={MASP_com_d.first_disparity_first_value}
          width={70}
          onChange={(e) =>
            setMASP_com_d({
              ...MASP_com_d,
              first_disparity_first_value: e.target.value,
            })
          }
        />
        이평
        <MorethanLessSelectBox
          value={MASP_com_d.first_comparision}
          width={70}
          value={MASP_com_d.first_comparision}
          event={(e) =>
            setMASP_com_d({ ...MASP_com_d, first_comparision: e.target.value })
          }
        />
        종가
        <Input
          value={MASP_com_d.first_disparity_second_value}
          width={70}
          onChange={(e) =>
            setMASP_com_d({
              ...MASP_com_d,
              first_disparity_second_value: e.target.value,
            })
          }
        />
        이평,
      </div>
      <div className="flex gap-2">
        종가
        <Input
          value={MASP_com_d.second_disparity_first_value}
          width={70}
          onChange={(e) =>
            setMASP_com_d({
              ...MASP_com_d,
              second_disparity_first_value: e.target.value,
            })
          }
        />
        이평
        <MorethanLessSelectBox
          value={MASP_com_d.second_comparision}
          width={70}
          value={MASP_com_d.second_comparision}
          event={(e) =>
            setMASP_com_d({ ...MASP_com_d, second_comparision: e.target.value })
          }
        />
        종가
        <Input
          value={MASP_com_d.second_disparity_second_value}
          width={70}
          onChange={(e) =>
            setMASP_com_d({
              ...MASP_com_d,
              second_disparity_second_value: e.target.value,
            })
          }
        />
        이평
      </div>
      <ConditionUseButton state={MASP_com_d} setState={setMASP_com_d} />
    </div>
  );
};

export default MASP_comparison_double;
