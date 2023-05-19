import { Dispatch, FC } from "react";

interface Props {
  state: any;
  setState: Dispatch<any>;
}

const ConditionUseButton: FC<Props> = ({ state, setState }) => {
  return (
    <button
      className="py-[12px] text-brand-500 font-bold bg-white rounded-xl mb-3 mt-3"
      onClick={() => setState({ ...state, flag: "1" })}
    >
      추가 +
    </button>
  );
};

export default ConditionUseButton;
