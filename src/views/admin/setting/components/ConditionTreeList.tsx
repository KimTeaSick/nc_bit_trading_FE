import { ConditionListObjectType, ConditionType } from "@/@types/Setting";
import { getConditionList } from "@/pages/api/settingAPI";
import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import ConditionButton from "./ConditionButton";
import { CHOICE_TYPE } from "@/components/condition/condition";

interface ConditionTreeListProps {
  select: Dispatch<SetStateAction<CHOICE_TYPE>>;
}

const ConditionTreeList: FC<ConditionTreeListProps> = ({ select }) => {
  const [condition, setCondition] = useState<ConditionType[]>([]);

  const settingCondition = useCallback(async () => {
    const response = await getConditionList();
    setCondition(response);
  }, []);

  useEffect(() => {
    settingCondition();
  }, [settingCondition]);

  return (
    <div className="w-1/5 h-screen rounded-3xl bg-gray-400 p-8 m-5 box-border">
      <div>
        {condition.map((value, index) => (
          <ConditionButton select={select} key={index} condition={value} />
        ))}
      </div>
    </div>
  );
};

export default ConditionTreeList;
