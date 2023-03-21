import { FC } from "react";
import * as HD from "./Header.styled";
import Button from "../SideBar/SideBar.button";
import {
  faHouse,
  faWallet,
  faChartLine,
  faPaperPlane,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const Header: FC = () => {
  const { activePage } = useSelector((state: any) => state.common);
  return (
    <HD.HeaderSection>
      <p className="homeButton">nc bit trading</p>
      <div className="buttonSection">
        <Button goal="/" icon={faHouse} active={activePage === "Dash"} />
        <Button
          goal="/wallet"
          icon={faWallet}
          active={activePage === "Wallet"}
        />
        <Button
          goal="/coin"
          icon={faChartLine}
          active={activePage === "Coin"}
        />
        <Button
          goal="/tradinglist"
          icon={faPaperPlane}
          active={activePage === "tradinglist"}
        />
        <Button
          goal="/setting"
          icon={faGear}
          active={activePage === "Setting"}
        />
      </div>
    </HD.HeaderSection>
  );
};

export default Header;
