import { useState } from "react";
import SetTrading from "./SetTrading";
import Trading from "./Trading";

const TradingOption = () => {
  const [fixMode, setFixMode] = useState(false);

  const buttonEvent = () => {
    console.log(fixMode);

    if (fixMode) {
      // true 일때
      setFixMode(!fixMode);
    } else {
      setFixMode(!fixMode);
    }
  };

  return (
    <>
      {fixMode ? (
        <SetTrading buttonEvent={buttonEvent} />
      ) : (
        <Trading buttonEvent={buttonEvent} />
      )}
    </>
  );
};

export default TradingOption;
