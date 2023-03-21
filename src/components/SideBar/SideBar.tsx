import {
  faHouse,
  faWallet,
  faChartLine,
  faPaperPlane,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { NextComponentType } from "next";
import * as SB from "./SideBarStyled";
import Button from "./SideBar.button";

const SideBar: NextComponentType = () => {
  const { activePage } = useSelector((state: any) => state.common);

  return (
    <SB.SideBarSection>
      <Button goal="/" icon={faHouse} active={activePage === "Dash"} />
      <Button goal="/wallet" icon={faWallet} active={activePage === "Wallet"} />
      <Button goal="/coin" icon={faChartLine} active={activePage === "Coin"} />
      <Button
        goal="/tradinglist"
        icon={faPaperPlane}
        active={activePage === "tradinglist"}
      />
      <Button goal="/setting" icon={faGear} active={activePage === "Setting"} />
    </SB.SideBarSection>
  );
};

export default SideBar;
