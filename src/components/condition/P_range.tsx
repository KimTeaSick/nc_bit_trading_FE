import { FC } from "react";
import { Input } from "../common/input";

const P_range: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>주가 범위</div>
      <div className="flex gap-2">
        <Input width={50} />
        <p>일전기준</p>
        <Input width={80} />
        <p>
          {`<=`} 종가 {`<=`}
        </p>
        <Input width={80} />
      </div>
    </div>
  );
};
export default P_range;
