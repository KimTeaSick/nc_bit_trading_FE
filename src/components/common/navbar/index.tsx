import React from "react";
import Dropdown from "@/components/common/dropdown";
import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import navbarimage from "@/assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import avatar from "@/assets/img/avatars/avatar4.png";

const Navbar = (props: {
  onOpenSidenav?: () => void;
  brandText?: string;
  secondary?: boolean | string;
}) => {
  const { onOpenSidenav, brandText } = props;
  const [darkmode, setDarkmode] = React.useState(false);

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl p-2">
      <div
        className="cursor-pointer text-gray-600 fixed top-3 right-3 w-10 h-10 rounded-full flex justify-center items-center bg-navy-50 dark:bg-navy-500"
        onClick={() => {
          if (darkmode) {
            document.body.classList.remove("dark");
            setDarkmode(false);
          } else {
            document.body.classList.add("dark");
            setDarkmode(true);
          }
        }}
      >
        {darkmode ? (
          <RiSunFill className="h-4 w-4 text-gray-600 dark:text-white" />
        ) : (
          <RiMoonFill className="h-4 w-4 text-gray-600 dark:text-white" />
        )}
      </div>
      {/* Profile & Dropdown */}
    </nav>
  );
};

export default Navbar;
