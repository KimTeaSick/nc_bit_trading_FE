import { FC } from "react";
import Button from "./Button";
import { CoinDetailButtonSection } from "./CoinDetailStyled";

const TERM_TEXT = ["1m", "3m", "5m", "10m", "30m", "1h", "6h", "12h", "24h"];

const ButtonSection: FC = () => {
  return (
    <CoinDetailButtonSection>
      {TERM_TEXT.map((value, index) => (
        <Button termText={value} key={index} />
      ))}
    </CoinDetailButtonSection>
  );
};
export default ButtonSection;
