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

interface DashBoardPageProps {
  recommendPrice: any[];
  isLoading: boolean;
}

const DashBoardPage: FC<DashBoardPageProps> = ({
  recommendPrice,
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
      {isLoading ? (
        <Loading />
      ) : (
        <RTSRSection>
          <RTSR reccomandItem={recommendPrice} />
        </RTSRSection>
      )}
      <PossessionSection>
        <Possession />
      </PossessionSection>
    </div>
  );
};

export default DashBoardPage;
