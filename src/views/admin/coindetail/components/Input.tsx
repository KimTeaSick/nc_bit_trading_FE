import InputWrapper from "@/components/headless/InputHeadless";
import { useState } from "react";

export const InputPrice = () => {
  const [value, setValue] = useState("");
  return (
    <InputWrapper id="sellPrice" type="text" text={value} onChange={setValue}>
      <div className="flex items-center gap-2 justify-between">
        <div className="w-1/5">
          <InputWrapper.Label>주문가격 : </InputWrapper.Label>
        </div>
        <div className="border-2 w-4/5 p-2 rounded-md">
          <InputWrapper.Input />
        </div>
      </div>
    </InputWrapper>
  );
};

export const InputCount = () => {
  const [value, setValue] = useState("");
  return (
    <InputWrapper id="sellCount" type="text" text={value} onChange={setValue}>
      <div className="flex items-center gap-2 justify-between">
        <div className="w-1/5">
          <InputWrapper.Label>주문개수 : </InputWrapper.Label>
        </div>
        <div className="border-2 w-4/5 p-2 rounded-md">
          <InputWrapper.Input />
        </div>
      </div>
    </InputWrapper>
  );
};
