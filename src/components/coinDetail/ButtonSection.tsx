import { FC } from "react";

const BUTTON_CLASS = `font-bold h-auto bg-blueSecondary p-3 text-white rounded-md flex justify-center items-center cursor-pointer`;
const EXTENED_CLASS = "bg-red-600";

interface Props {
  title?: string;
  event?: () => void;
  type?: boolean;
}

const Button: FC<Props> = ({ title, event, type }) => {
  return (
    <div className={`${BUTTON_CLASS} ${type && EXTENED_CLASS}`} onClick={event}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
