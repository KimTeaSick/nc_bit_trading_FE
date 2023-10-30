import Widget from "@/components/common/widget/Widget";
import { CHANGE_KR_NAME } from "@/variables/coinNameChange";
import { IoDocuments } from "react-icons/io5";
import WarningButton from "./WarningButton";
import { updateCoinWarning } from "@/pages/api/coinListAPIs";
import { krwChage } from "@/lib/krwChage";
import { FC } from "react";

interface Props {
  coinName: string;
  selectCoin: any;
}

const TopWidget: FC<Props> = ({ selectCoin, coinName }) => (
  <div className="z-20 grid grid-cols-1 gap-5 md:grid-cols-3 mb-3">
    <Widget
      icon={<IoDocuments className="h-6 w-6" />}
      subtitle={CHANGE_KR_NAME(coinName)}
      button={
        <WarningButton
          isWarning={selectCoin?.warning === "1"}
          event={() =>
            updateCoinWarning({
              value: selectCoin?.warning === "1" ? 0 : 1,
              coin_name: coinName + "_KRW",
            })
          }
        />
      }
    />
    <Widget
      icon={<IoDocuments className="h-6 w-6" />}
      title={""}
      subtitle={"하락"}
    />
    <Widget
      icon={<IoDocuments className="h-6 w-6" />}
      title={""}
      subtitle={`금일 최고가 : ${krwChage(
        String(selectCoin?.max_price)
      )} 원   금일 최저가 : ${krwChage(String(selectCoin?.min_price))} 원 `}
    />
  </div>
);

export default TopWidget;
