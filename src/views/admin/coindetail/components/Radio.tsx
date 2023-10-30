import RadioWrapper from "@/components/headless/RadioHeadless";
import RadioHeadless from "@/components/headless/RadioHeadless";
import { useState } from "react";

const SellTypeRadio = () => {
  const [radio, setRadio] = useState(1);
  return (
    <RadioWrapper id="sellType" onChange={setRadio} isChecked={radio}>
      <div className="flex justify-center gap-4 font-bold">
        <div className="flex gap-2">
          <RadioWrapper.Radio id="sellType" rValue={1} />
          <RadioWrapper.Label>지정가</RadioWrapper.Label>
        </div>
        <div className="flex gap-2">
          <RadioWrapper.Radio id="sellType" rValue={2} />
          <RadioWrapper.Label>시장가</RadioWrapper.Label>
        </div>
      </div>
    </RadioWrapper>
  );
};

export default SellTypeRadio;
