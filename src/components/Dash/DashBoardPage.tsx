import {
  AccountInfoSection,
  PossessionSection,
  RTSRSection,
} from "./Dash.styled";
import { RootStateType } from "@/module/rootReducer.d";
import { useSelector } from "react-redux";
import { krwChage } from "@/lib/krwChage";
import { FC } from "react";
import AccountInfo from "./AccountInfo";
import Loading from "../common/Loading";
import Possession from "./Possession";
import RTSR from "./RTSR";
import { PossessionCoinType } from "@/@types/Dash.d";

interface DashBoardPageProps {
  recommendPrice: any[];
  isLoading: boolean;
  possessionCoin: PossessionCoinType[];
}

const DashBoardPage: FC<DashBoardPageProps> = ({
  recommendPrice,
  possessionCoin,
  isLoading,
}) => {
  const { myProperty } = useSelector((state: RootStateType) => state.wallet);

  return (
    <div>
      <AccountInfoSection>
        <AccountInfo
          property={krwChage(String(Math.round(Number(myProperty))))}
        />
      </AccountInfoSection>
      <p>실시간 조건 검색</p>
      <RTSRSection>
        <RTSR isLoading={isLoading} reccomandItem={recommendPrice} />
      </RTSRSection>
      <PossessionSection>
        <Possession possessionCoin={possessionCoin} />
      </PossessionSection>
    </div>
  );
};

export default DashBoardPage;
