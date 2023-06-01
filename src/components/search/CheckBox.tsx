import ConditionDisabled from "@/assets/svg/ConditionDisabled.svg";
import ConditionAbled from "@/assets/svg/ConditionAbled.svg";
import Image from "next/image";
import { FC } from "react";

interface Props {
  flag: 1 | 0;
  event: () => void;
}

const CheckBox: FC<Props> = ({ flag, event }) => {
  return (
    <div onClick={event} className="m-3">
      {flag ? (
        <Image src={ConditionAbled} alt="check" width={20} height={20} />
      ) : (
        <Image src={ConditionDisabled} alt="uncheck" width={20} height={20} />
      )}
    </div>
  );
};

export default CheckBox;
