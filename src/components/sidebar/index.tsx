/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import { ROUTES, AUTH_ROUTES } from "../../routes";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { useEffect } from "react";
import { getNowUsedCondition } from "@/pages/api/autotrading";

const Sidebar = (props: {
  open?: boolean;
  onClose?: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const dispatch = useDispatch<any>();
  const { open, onClose } = props;
  const { autoTradingStatus } = useSelector(
    (state: RootStateType) => state.common
  );
  useEffect(() => {
    dispatch(getNowUsedCondition());
  }, [dispatch]);

  console.log("autoTradingStatus ::::::: ", autoTradingStatus);

  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[5%] mt-[50px] flex items-center`}>
        <div className="ml-1 mt-1 h-2.5 font-poppins font-bold uppercase text-navy-700 dark:text-white flex flex-col justify-center items-center">
          <div>
            <div className="text-2xl">4SEASON</div>
            <span className="font-medium text-xs">Trading</span>
          </div>
        </div>
      </div>
      <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={autoTradingStatus === 0 ? ROUTES : AUTH_ROUTES} />
      </ul>

      {/* Free Horizon Card */}
      <div className="flex justify-center">{/* <SidebarCard /> */}</div>

      {/* Nav item end */}
    </div>
  );
};

export default Sidebar;
