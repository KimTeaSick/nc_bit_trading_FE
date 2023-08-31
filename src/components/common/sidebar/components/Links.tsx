/* eslint-disable */
import React from "react";
import Link from "next/link";
import DashIcon from "@/components/icons/DashIcon";
export const SidebarLinks = ({ routes }: { routes: any[] }): JSX.Element => {
  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLinks = (routes: any[]) => {
    return routes.map((route, index) => (
      <Link href={route.layout + "/" + route.path} key={index}>
        <div className="relative mb-3 flex hover:cursor-pointer">
          <li className="my-[3px] flex cursor-pointer items-center px-8">
            <span
              className={`${
                activeRoute(route.path) === true
                  ? "font-bold text-brand-500 dark:text-white"
                  : "font-medium text-gray-600"
              }`}
            >
              {route.icon ? route.icon : <DashIcon />}{" "}
            </span>
            <p
              className={`leading-1 ml-4 flex ${
                activeRoute(route.path) === true
                  ? "font-bold text-navy-700 dark:text-white"
                  : "font-medium text-gray-600"
              }`}
            >
              {route.name}
            </p>
          </li>
          {activeRoute(route.path) ? (
            <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
          ) : null}
        </div>
      </Link>
    ));
  };
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
