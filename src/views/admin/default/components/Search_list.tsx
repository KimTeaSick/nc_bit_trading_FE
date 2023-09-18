import { FC } from "react";
import { SEARCH_LIST } from "../variables/TABLE_COL";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";
import { isArray } from "@amcharts/amcharts5/.internal/core/util/Type";

const COMPONENT_COVER_CLASS =
  "w-full bg-white rounded-2xl h-[50vh] p-5 dark:bg-navy-800";
const TH_CLASS =
  "flex justify-between w-full font-bold border-b-2 pb-2 text-gray-700";
const TITLE_CLASS = "font-bold text-xl mb-3 text-gray-900 dark:text-gray-300";
const TABLE_WRAPPER = "overflow-y-scroll w-full h-[40vh] scrollbar-hide";
const ROW_CLASS = "font-medium flex justify-between dark:text-gray-300";
const COL_CLASS = " font-bold my-3 text-sm";
const W_F = "w-full";

interface Props {
  value: any[];
}

const Search_list: FC<Props> = ({ value }) => {
  return (
    <div className={COMPONENT_COVER_CLASS}>
      <p className={TITLE_CLASS}>실시간 종목</p>
      <table className={W_F}>
        <thead>
          <tr className={TH_CLASS}>
            {SEARCH_LIST.map((col: string, index: number) => (
              <td className={W_F} key={index}>
                {col}
              </td>
            ))}
          </tr>
        </thead>
      </table>
      <div className={TABLE_WRAPPER}>
        <table className={W_F}>
          <tbody>
            {Array.isArray(value) &&
              value.map(
                (
                  coin: { name: string; catch_price: string },
                  index: number
                ) => (
                  <tr className={ROW_CLASS} key={index}>
                    <td className={W_F + COL_CLASS}>
                      {CHANGE_KR_NAME(coin.name)}
                    </td>
                    <td className={W_F + COL_CLASS}>{coin.catch_price}</td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search_list;
