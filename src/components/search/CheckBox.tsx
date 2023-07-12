import ConditionDisabled from "@/assets/svg/ConditionDisabled.svg";
import ConditionAbled from "@/assets/svg/ConditionAbled.svg";
import Image from "next/image";
import { Dispatch, FC, SetStateAction, useCallback } from "react";

interface Props {
  value?: any;
  setValue: Dispatch<SetStateAction<1 | 0>>;
  flag?: any;
  event?: any;
}

const CheckBox: FC<Props> = ({ value, setValue }) => {
  const event = useCallback(
    (): void => setValue({ ...value, flag: value.flag === 1 ? 0 : 1 }),
    [setValue, value]
  );

  return (
    <div onClick={event} className="w-11 m-3">
      {value.flag ? (
        <Image src={ConditionAbled} alt="check" width={20} height={20} />
      ) : (
        <Image src={ConditionDisabled} alt="uncheck" width={20} height={20} />
      )}
    </div>
  );
};

export default CheckBox;
