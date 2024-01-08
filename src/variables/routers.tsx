import React from "react";
import { SiBitcoinsv } from "react-icons/si";
import { IoSettingsSharp, IoPizza } from "react-icons/io5";
import { MdHome, MdBarChart, MdPerson } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

const NO_LOGIN = [
  {
    name: "Login",
    layout: "/user",
    path: "login",
    icon: <MdPerson className="h-6 w-6" />,
  },
];

const ACTIVE_AUTO = [
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
    name: "Auto Trading",
    layout: "/admin",
    icon: <IoPizza className="h-6 w-6" />,
    path: "autotrading",
  },
];

const INACTIVE_AUTO = [
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
];

const ADMIN_ROUTER = [
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
    name: "Member",
    layout: "/admin",
    icon: <BsPeople className="h-6 w-6" />,
    path: "member",
  },
  {
    name: "Search",
    layout: "/admin",
    icon: <IoSettingsSharp className="h-6 w-6" />,
    path: "search",
  },
];

const ADMIN_ACTIVE_ROUTER = [
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
    name: "Member",
    layout: "/admin",
    icon: <BsPeople className="h-6 w-6" />,
    path: "member",
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

export {
  NO_LOGIN,
  ACTIVE_AUTO,
  INACTIVE_AUTO,
  ADMIN_ACTIVE_ROUTER,
  ADMIN_ROUTER,
};
