import { ConditionListObjectType, ConditionType } from "@/@types/Setting";
import { getConditionList } from "@/pages/api/settingAPI";
import { FC, useCallback, useEffect, useState } from "react";
import ConditionButton from "./ConditionButton";

const ConditionTreeList: FC = () => {
  const [condition, setCondition] = useState<ConditionType[]>([]);

  const settingCondition = useCallback(async () => {
    const response = await getConditionList();
    setCondition(response);
  }, []);

  useEffect(() => {
    settingCondition();
  }, [settingCondition]);

  return (
    <div>
      <div className="w-6/12 h-screen rounded-3xl bg-gray-400 p-8 m-5 box-border">
        <div>
          {condition.map((value, index) => (
            <ConditionButton key={index} condition={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConditionTreeList;
