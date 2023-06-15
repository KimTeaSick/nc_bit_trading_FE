import { dataChanger } from "../lib/ModalDataChanger";
import { FC, useRef } from "react";
import {
  SEARCH_OPTION,
  TRADING_OPTION_VALUE_LIST,
} from "../construct/modalValue";

interface Props {
  condition: any[];
  type: string;
  showControl: (type: string) => void;
}

const ConditionModal: FC<Props> = ({ type, condition = [], showControl }) => {
  console.log(condition);
  const modalRef = useRef(null);
  return (
    <div
      ref={modalRef}
      onClick={(e) => {
        if (e.target == modalRef.current) showControl("N");
      }}
      className=" bg-opacity-40 bg-gray-500 w-[100vw] h-[100vh] z-50 fixed top-0 left-0 overflow-hidden"
    >
      <div className="bg-indigo-100 rounded-lg w-2/5 h-auto overflow-hidden fixed top-[20%] left-[30%]">
        <div className="bg-navy-500 p-2">
          <p className="text-2xl font-bold text-white text-center">
            {type === "search" ? "검색 조건" : "매매 조건"}
          </p>
        </div>
        <div className="p-5">
          {type === "search"
            ? SEARCH_OPTION.map((value, index) => (
                <div key={index} className="flex gap-2">
                  <p className="font-bold">{value} : </p>
                  <p>{`${dataChanger(condition[index])}`}</p>
                </div>
              ))
            : TRADING_OPTION_VALUE_LIST.map((value, index) => (
                <div key={index} className="flex gap-2">
                  <p className="font-bold">{value} : </p>
                  <p>{`${dataChanger(condition[index])}`}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ConditionModal;
