import React from "react";

// Admin Imports
import MainDashboard from "@/views/admin/default";
import MyWallet from "@/views/admin/mywallet";
import CoinList from "@/views/admin/coinlist";
import CoinDetail from "@/views/admin/coindetail";
import Profile from "@/views/admin/profile";
import DataTables from "@/views/admin/tables";
import Setting from "@/views/admin/setting";
import RTLDefault from "@/views/rtl/default";
import { HiWallet } from "react-icons/hi2";
import { SiBitcoinsv } from "react-icons/si";
import { IoSettingsSharp } from "react-icons/io5";

// Auth Imports
import SignIn from "@/views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "My Wallet",
    layout: "/admin",
    path: "wallet",
    icon: <HiWallet className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Coin List",
    layout: "/admin",
    path: "coin",
    icon: <SiBitcoinsv className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Transaction History",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "tradinghistory",
  },
  {
    name: "Setting",
    layout: "/admin",
    icon: <IoSettingsSharp className="h-6 w-6" />,
    path: "setting",
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
  },
];
export default routes;
