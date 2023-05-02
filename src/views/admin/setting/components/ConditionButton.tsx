import { ConditionType } from "@/@types/Setting";
import { FC, useState } from "react";

interface ConditionButtonProps {
  condition: ConditionType;
}

const ConditionButton: FC<ConditionButtonProps> = ({ condition }) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className="cursor-pointer font-semibold"
        onClick={() => setShow(!show)}
      >
        {condition.group}
        {show ? " -" : " +"}
      </div>
      {show &&
        condition.condition.map((value, index) => (
          <div className="pl-2 cursor-pointer text-sm" key={index}>
            {value}
          </div>
        ))}
    </div>
  );
};

export default ConditionButton;
