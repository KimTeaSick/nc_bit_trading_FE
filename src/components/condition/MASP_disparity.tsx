import { Dispatch, FC } from "react";
import { TermSelectBox } from "../common/select/SelectBox";
import { Input } from "../common/input";
import { useMASP_disparityType } from "./condition";
import ConditionUseButton from "./ConditionUseButton";

interface Props {
  MASP_dis: useMASP_disparityType;
  setMASP_dis: Dispatch<useMASP_disparityType>;
}

const MASP_disparity: FC<Props> = ({ MASP_dis, setMASP_dis }) => {
  return (
    <div className="flex flex-col gap-2">
      <div>이동평균 이격도</div>
      <div className="flex gap-2 items-center">
        <TermSelectBox
          value={MASP_dis.term}
          width={70}
          event={(e) => setMASP_dis({ ...MASP_dis, term: e.target.value })}
        />
        주기
        <Input
          value={MASP_dis.timing}
          width={70}
          onChange={(e) => setMASP_dis({ ...MASP_dis, timing: e.target.value })}
        />
        봉전 기준
      </div>
      <div className="flex gap-2 items-center">
        단기이평 종가
        <Input
          value={MASP_dis.first_disparity}
          width={70}
          onChange={(e) =>
            setMASP_dis({ ...MASP_dis, first_disparity: e.target.value })
          }
        />
        장기이평 종가
        <Input
          value={MASP_dis.second_disparity}
          width={70}
          onChange={(e) =>
            setMASP_dis({ ...MASP_dis, second_disparity: e.target.value })
          }
        />
      </div>
      <div className="flex gap-2 items-center">
        단기 / 장기 근접
        <Input
          value={MASP_dis.percent}
          width={70}
          onChange={(e) =>
            setMASP_dis({ ...MASP_dis, percent: e.target.value })
          }
        />{" "}
        % 이내
        <Input
          value={MASP_dis.count}
          width={70}
          onChange={(e) => setMASP_dis({ ...MASP_dis, count: e.target.value })}
        />{" "}
        회 이상
      </div>
      <ConditionUseButton state={MASP_dis} setState={setMASP_dis} />
    </div>
  );
};

export default MASP_disparity;
