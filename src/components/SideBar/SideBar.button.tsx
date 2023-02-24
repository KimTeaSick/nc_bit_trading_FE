import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";
import * as SB from "./SideBarStyled";
import { NextPage } from "next";
import Link from "next/link";

interface ButtonProps {
  goal: string;
  active: boolean;
  icon: IconDefinition;
}

const Button: NextPage<ButtonProps> = ({ icon, goal, active }) => {
  return (
    <Link href={goal}>
      <SB.SideBarButton className="sidebar_button_size" active={active}>
        <FontAwesomeIcon icon={icon} color={active ? "#fff" : "#636363"} />
      </SB.SideBarButton>
    </Link>
  );
};

export default Button;
