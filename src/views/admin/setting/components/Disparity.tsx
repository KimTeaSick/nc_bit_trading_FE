import Card from "@/components/card";
import { FC } from "react";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { RxDot } from "react-icons/rx";

interface DisparityProps {
  buttonEvent: () => void;
  data: any;
  fixMode: boolean;
}

const Disparity: FC<DisparityProps> = ({ buttonEvent, data, fixMode }) => {
  return (
    <Card extra="!rounded-[20px]">
      <div className="flex flex-row items-center ">
        <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
          <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
            <span className="flex items-center text-brand-500 dark:text-white">
              <AiOutlineColumnHeight />
            </span>
          </div>
        </div>
        <div className="h-50 ml-4 flex w-auto flex-col justify-center">
          <h4 className="text-xl font-bold text-navy-700 dark:text-white">
            이동평균선 설정
          </h4>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            Line One
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 기간 설정 : {data?.line_one.range}
            </li>
            <li className="flex items-center">
              <RxDot /> 색상 설정 : {data?.line_one.color}
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            Line Two
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 기간 설정 : {data?.line_two.range}
            </li>
            <li className="flex items-center">
              <RxDot /> 색상 설정 : {data?.line_two.color}
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            Line Three
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 기간 설정 : {data?.line_three.range}
            </li>
            <li className="flex items-center">
              <RxDot /> 색상 설정 : {data?.line_three.color}
            </li>
          </ul>
        </div>
        <div className="text-right">
          <button
            className="linear rounded-xl bg-brand-500 py-[12px] px-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => buttonEvent()}
          >
            수정
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Disparity;
