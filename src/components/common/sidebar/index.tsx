/* eslint-disable */
import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import { ROUTES, AUTH_ROUTES } from "../../../routes";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/module/rootReducer.d";
import { useEffect } from "react";
import { getNowUsedCondition } from "@/pages/api/autotrading";
import { MdMenu } from "react-icons/md";
import { useRouter } from "next/router";

const MENU_BTN_CLASS = `!z-50 fixed left-3 top-3 bg-white w-10 h-10 flex items-center justify-center rounded-r-lg cursor-pointer
  sm: !rounded-[100%] shadow
  `;

const Sidebar = (props: {
  open?: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch<any>();
  const history = useRouter();
  const { open, onClose } = props;
  const { autoTradingStatus } = useSelector(
    (state: RootStateType) => state.common
  );
  // const { userInfo } = useSelector((state: RootStateType) => state.user);
  const idx = localStorage.getItem("user_idx");
  const log_out_event = () => {
    localStorage.clear();
    history.replace("/user/login");
  };
  useEffect(() => {
    dispatch(getNowUsedCondition());
    if (window.screen.width < 500) {
      console.log("window.screen.width ::: ::: ", window.screen.width);
      onClose(false);
    }
  }, [dispatch]);

  return (
    <>
      {!open ? (
        <div className={MENU_BTN_CLASS} onClick={() => onClose(true)}>
          <MdMenu />
        </div>
      ) : (
        <div
          className={`
          sm:none duration-175 linear fixed !z-50 flex flex-col min-h-full bg-white pb-10 shadow-2xl shadow-white/5 transition-all 
          dark:!bg-navy-800 dark:text-white 
          md:!z-50 
          lg:!z-50 
          xl:!z-0 
      ${open ? "translate-x-0" : "-translate-x-90"}`}
        >
          <span
            className="absolute right-4 top-4 block cursor-pointer xl:hidden"
            onClick={() => onClose(false)}
          >
            <HiX />
          </span>
          <div className={`mx-[5%] mt-[50px] flex items-center`}>
            <div className="ml-1 mt-1 h-2.5 font-poppins font-bold uppercase text-navy-700 dark:text-white flex flex-col justify-center items-center">
              <div>
                <div className="text-2xl">4SEASONS</div>
                <span className="font-medium text-xs">Auto Trading System</span>
              </div>
            </div>
          </div>
          <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
          {idx && (
            <>
              <div className="flex justify-center items-center">
                <p className="cursor-pointer" onClick={log_out_event}>
                  log out
                </p>
              </div>
              <div className="my-7 h-px bg-gray-300 dark:bg-white/30" />
            </>
          )}
          {/* Nav item */}
          <ul className="mb-auto pt-1">
            <Links routes={idx === null ? ROUTES : AUTH_ROUTES} />
          </ul>
        </div>
      )}
    </>
  );
};

export default Sidebar;
