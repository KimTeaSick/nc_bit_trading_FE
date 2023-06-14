import {
  AccountInfoSection,
  PageStructure,
  PossessionSection,
  RTSRSection,
} from "./Dash.styled";
import { FC } from "react";
import AccountInfo from "./AccountInfo";
import Possession from "./Possession";
import RTSR from "./RTSR";
import { PossessionCoinType } from "@/@types/Dash.d";

interface DashBoardPageProps {
  recommendPrice: any[];
  isLoading: boolean;
  possessionCoin?: PossessionCoinType[];
}

const DashBoardPage: FC<DashBoardPageProps> = ({
  recommendPrice,
  isLoading,
}) => {
  return (
    <PageStructure>
      <div className="leftSection">
        <AccountInfoSection>
          <AccountInfo />
        </AccountInfoSection>
        <p>실시간 조건 검색</p>
        <RTSRSection>
          <RTSR isLoading={isLoading} reccomandItem={recommendPrice} />
        </RTSRSection>
        <PossessionSection>
          <Possession />
        </PossessionSection>
      </div>
      <div className="rightSection">
        <div>
          <p>매수 조건</p>
          <div className="rightContent"></div>
        </div>
        <div>
          <p>매도 조건</p>
          <div className="rightContent"></div>
        </div>
        <button className="autoSBbutton">자동매매 시작</button>
      </div>
    </PageStructure>
  );
};

export default DashBoardPage;
