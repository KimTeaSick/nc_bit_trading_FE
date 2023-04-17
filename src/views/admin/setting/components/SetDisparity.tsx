import Card from "@/components/card";
import { Dispatch, FC, SetStateAction } from "react";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { RxDot } from "react-icons/rx";

interface SetDisparityProps {
  buttonEvent: () => void;
  disparityOption: any;
  setDisparityOption: any;
  fixMode: boolean;
}

const SetDisparity: FC<SetDisparityProps> = ({
  buttonEvent,
  fixMode,
  disparityOption,
  setDisparityOption,
}) => {
  return (
    <Card extra="!rounded-[20px]">
      <div className="flex flex-row flex-grow items-center ">
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
              <RxDot /> 기간 설정 :
              <input
                type="number"
                placeholder="00"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  setDisparityOption({
                    line_one: {
                      ...disparityOption.line_one,
                      range: e.target.value,
                    },
                  })
                }
              />
            </li>
            <li className="flex items-center">
              <RxDot /> 색상 설정 :
              <input
                type="text"
                placeholder="red"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  setDisparityOption({
                    line_one: {
                      ...disparityOption.line_one,
                      color: e.target.value,
                    },
                  })
                }
              />
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            Line Two
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 기간 설정 :
              <input
                type="number"
                placeholder="00"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  setDisparityOption({
                    line_two: {
                      ...disparityOption.line_two,
                      range: e.target.value,
                    },
                  })
                }
              />
            </li>
            <li className="flex items-center">
              <RxDot /> 색상 설정 :
              <input
                type="text"
                placeholder="red"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  setDisparityOption({
                    line_two: {
                      ...disparityOption.line_two,
                      color: e.target.value,
                    },
                  })
                }
              />
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <h4 className="py-3 ml-1 text-xl font-bold text-brand-500 dark:text-white">
            Line Three
          </h4>
          <ul>
            <li className="flex items-center">
              <RxDot /> 기간 설정 :
              <input
                type="number"
                placeholder="00"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  setDisparityOption({
                    line_three: {
                      ...disparityOption.line_three,
                      range: e.target.value,
                    },
                  })
                }
              />
            </li>
            <li className="flex items-center">
              <RxDot /> 색상 설정 :
              <input
                type="text"
                placeholder="red"
                className="mx-3 rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200 dark:!border-white/10 dark:text-white"
                onChange={(e) =>
                  setDisparityOption({
                    line_three: {
                      ...disparityOption.line_three,
                      color: e.target.value,
                    },
                  })
                }
              />
            </li>
          </ul>
        </div>
        <div className="text-right">
          <button
            className="linear rounded-xl bg-brand-500 py-[12px] px-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
            onClick={() => buttonEvent()}
          >
            저장
          </button>
        </div>
      </div>
    </Card>
  );
};

export default SetDisparity;
