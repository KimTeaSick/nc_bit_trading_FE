import { FC } from "react";
import { CONDITION_COLUMN } from "../../lib/construct";
import { useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";

const COVER_CLASS = "w-full bg-white rounded-lg h-full p-2 dark:bg-navy-100";
const TABLE_CLASS = "px-3 font-semibold text-gray-700 w-full";
const TABLE_HEAD_CLASS = "border-gray-200 border-b-2 flex ";
const TR_CLASS = "w-full flex justify-between items-center";
const TD_CLASS = "w-1/3 flex justify-center";
const USE_OPTION = " bg-red-400 rounded-lg text-white ";
const NOW_CHOICE_OPTION = " bg-navy-400 rounded-lg text-white ";

interface Props {
  itemList: any[];
  onClick: (idx: number) => void;
  name: string;
  resetEvent: () => void;
}

const ConditionList: FC<Props> = ({ itemList, onClick, name, resetEvent }) => {
  return (
    <div className={COVER_CLASS}>
      <p className="text-xl font-bold">조건 리스트</p>
      <table className={TABLE_CLASS}>
        <thead className={TABLE_HEAD_CLASS}>
          <tr className={TR_CLASS}>
            {CONDITION_COLUMN.map((value: string, index: number) => (
              <th className={TD_CLASS} key={index}>
                {value}
              </th>
            ))}
          </tr>
        </thead>
        {Array.isArray(itemList) &&
          itemList?.map((value: any, idx: number) => (
            <tr
              className={
                `${TR_CLASS}` +
                `${value.used && USE_OPTION}` +
                `${value.Name === name && NOW_CHOICE_OPTION}` +
                " text-sm cursor-pointer text-gray-900 items-center"
              }
              onClick={() => onClick(value.idx)}
              key={idx}
            >
              <td className={TD_CLASS}>{value.Name}</td>
              <td className={TD_CLASS}>{value.Create_date}</td>
              <td className={TD_CLASS}>{value.Update_date}</td>
            </tr>
          ))}
        <tr
          className={
            `${TR_CLASS}` +
            " text-sm cursor-pointer text-gray-900 items-center py-5"
          }
          onClick={resetEvent}
        >
          <td className={TD_CLASS}>새로운 조건 등록</td>
          <td className={TD_CLASS}>-</td>
          <td className={TD_CLASS}>-</td>
        </tr>
      </table>
    </div>
  );
};

export default ConditionList;
