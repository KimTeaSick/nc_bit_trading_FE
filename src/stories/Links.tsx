/* eslint-disable */
import React, { FC } from "react";
import Link from "next/link";
import DashIcon from "@/components/icons/DashIcon";
import "../styles/globals.css";

interface Props {
  routes: string[];
  size: string;
  primary: boolean;
  title: string;
  bgColor: string;
}

const SidebarLinks: FC<Props> = ({ routes, size, primary, title, bgColor }) => {
  return (
    <Link href={"/"}>
      <div
        className={`relative w-${size} flex gap-2 rounded-md hover:cursor-pointer p-2 bg-${bgColor}`}
      >
        <div>
          <DashIcon />
        </div>
        <div>{title}</div>
      </div>
    </Link>
  );
};

export default SidebarLinks;
