import { FC } from "react";
import { CONDITION_COLUMN } from "../../lib/construct";

const COVER_CLASS = "w-1/2 bg-white rounded-lg h-auto p-3";
const TABLE_CLASS = "px-3 font-semibold text-gray-700 w-full";
const TABLE_HEAD_CLASS = "border-gray-200 border-b-2";
const TR_CLASS = "flex justify-between";
interface Props {
  itemList: any[];
}

const ConditionList: FC<Props> = ({ itemList }) => {
  return (
    <div className={COVER_CLASS}>
      <p className="text-xl font-bold">조건 리스트</p>
      <table className={TABLE_CLASS}>
        <thead className={TABLE_HEAD_CLASS}>
          <tr className={TR_CLASS}>
            {CONDITION_COLUMN.map((value: string, index: number) => (
              <th key={index}>{value}</th>
            ))}
          </tr>
        </thead>
        {itemList.map((value: any, idx: number) => (
          <tr
            className={`${TR_CLASS}` + " text-sm cursor-pointer text-gray-900"}
            key={idx}
          >
            <td>{value.name}</td>
            <td>{value.registe}</td>
            <td>{value.update}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ConditionList;
