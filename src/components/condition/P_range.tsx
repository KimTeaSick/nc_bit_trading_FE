import { FC } from "react";
import { Input } from "../common/input";
import { useP_range } from "./useCondition";

const P_range: FC = () => {
  const [P_ran, setP_ran] = useP_range();
  return (
    <div className="flex flex-col gap-2">
      <div>주가 범위</div>
      <div className="flex gap-2">
        <Input
          width={50}
          onChange={(e) => setP_ran({ ...P_ran, term: e.target.value })}
        />
        <p>일전기준</p>
        <Input
          width={80}
          onChange={(e) => setP_ran({ ...P_ran, first: e.target.value })}
        />
        <p>
          {`<=`} 종가 {`<=`}
        </p>
        <Input
          width={80}
          onChange={(e) => setP_ran({ ...P_ran, second: e.target.value })}
        />
      </div>
    </div>
  );
};
export default P_range;
