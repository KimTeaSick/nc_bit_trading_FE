import { ConditionType } from "@/@types/Setting";
import { CHOICE_TYPE } from "@/components/condition/condition";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface ConditionButtonProps {
  condition: ConditionType;
  select: Dispatch<SetStateAction<CHOICE_TYPE>>;
}

const ConditionButton: FC<ConditionButtonProps> = ({ condition, select }) => {
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
        condition.condition.map((value: any, index) => (
          <div
            key={index}
            className="pl-2 cursor-pointer text-sm"
            onClick={() => select(value)}
          >
            {value}
          </div>
        ))}
    </div>
  );
};

export default ConditionButton;
