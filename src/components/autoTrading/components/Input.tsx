import { SetStateAction, useState } from "react";

import InputWrapper from "@/components/headless/InputHeadless";

interface Props {
  label: string;
  value: string;
  setValue: (e: any) => void;
}

export const Input = ({ label, value, setValue }: Props) => {
  return (
    <InputWrapper id="sellPrice" type="text" text={value} onChange={setValue}>
      <div className="flex items-center gap-2 justify-between">
        <div className="w-1/5">
          <InputWrapper.Label>{label} </InputWrapper.Label>
        </div>
        <div className="border-2 w-4/5 p-2 rounded-md">
          <InputWrapper.Input />
        </div>
      </div>
    </InputWrapper>
  );
};
