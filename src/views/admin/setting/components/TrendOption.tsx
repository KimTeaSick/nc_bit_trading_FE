import Card from "@/components/card";
import { AiOutlineRise } from "react-icons/ai";
import { RxDot } from "react-icons/rx";

const TrendOption = () => {
  return (
    <Card extra="!rounded-[20px]">
      <div className="flex flex-row items-center ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <AiOutlineRise />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            추세 설정
          </h4>
        </div>
      </div>
      <div className="p-5 flex flex-col">
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            추세 설정
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 추세 범위
              <input
                type="number"
                id=""
                placeholder="00"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
              ></input>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            이격도 설정
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 이격도 범위
              <input
                type="number"
                id=""
                placeholder="00"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
              ></input>
            </li>
          </ul>
        </div>
        <div className="text-right mt-8">
          <button className="linear rounded-xl bg-brand-500 py-[12px] px-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
            수정
          </button>
        </div>
      </div>
    </Card>
  );
};

export default TrendOption;
