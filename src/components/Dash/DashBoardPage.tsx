import { RootStateType } from "@/module/rootReducer.d";
import { FC } from "react";
import { useSelector } from "react-redux";
import { krwChage } from "@/lib/krwChage";
import { PropertySection } from "./Dash.styled";

const DashBoardPage: FC = () => {
  const { myProperty } = useSelector((state: RootStateType) => state.wallet);
  return (
    <div>
      <p>DashBoard</p>
      <PropertySection>
        {krwChage(String(Math.round(Number(myProperty))))} ₩
      </PropertySection>
    </div>
  );
};

export default DashBoardPage;
