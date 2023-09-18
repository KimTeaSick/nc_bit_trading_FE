import { FC } from "react";

interface Props {
  title: string;
  event: () => void;
}

const BUTTON =
  "bg-brand-500 px-1 ml-2 rounded-md text-white text-sm flex items-center cursor-pointer";

const Dash_detail_button: FC<Props> = ({ title, event }) => {
  return (
    <div className={BUTTON} onClick={event}>
      <p>{title}</p>
    </div>
  );
};

export default Dash_detail_button;
