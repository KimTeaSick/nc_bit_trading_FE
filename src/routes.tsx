import React from "react";
import { SiBitcoinsv } from "react-icons/si";
import { IoSettingsSharp, IoPizza } from "react-icons/io5";
import { MdHome, MdBarChart, MdPerson, MdLock } from "react-icons/md";
import { useSelector } from "react-redux";
import { RootStateType } from "./module/rootReducer.d";

const ROUTES = [
  {
    name: "Login",
    layout: "/user",
    path: "login",
    icon: <MdPerson className="h-6 w-6" />,
  },
];

const AUTH_ROUTES = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Coin List",
    layout: "/admin",
    path: "coin",
    icon: <SiBitcoinsv className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Assets",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "assetsStatus",
  },
  {
    name: "Search",
    layout: "/admin",
    icon: <IoSettingsSharp className="h-6 w-6" />,
    path: "search",
  },
  {
    name: "Auto Trading",
    layout: "/admin",
    icon: <IoPizza className="h-6 w-6" />,
    path: "autotrading",
  },
];

const useRouter = () => {
  const { userInfo } = useSelector((state: RootStateType) => state.user);
  return userInfo.idx !== null ? AUTH_ROUTES : ROUTES;
};

export { ROUTES, AUTH_ROUTES };
