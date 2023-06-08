import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import CHECKED from "@/assets/svg/ConditionAbled.svg";
import UNCHECKED from "@/assets/svg/ConditionDisabled.svg";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<any>>;
  initialValue: string;
}

const RadioButton: FC<Props> = ({ value, setValue, initialValue }) => {
  return (
    <div onClick={setValue}>
      {value === initialValue ? (
        <Image src={CHECKED.src} alt="checked" width={18} height={18} />
      ) : (
        <Image src={UNCHECKED.src} alt="unchecked" width={18} height={18} />
      )}
    </div>
  );
};

export default RadioButton;
