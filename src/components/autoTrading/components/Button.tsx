import { FC } from "react";

const BUTTON_CLASS =
  "font-bold h-auto bg-blueSecondary p-3 text-white rounded-md flex justify-center items-center cursor-pointer";

interface Props {
  title: string;
  event: () => void;
}

const Button: FC<Props> = ({ title, event }) => {
  return (
    <div className={BUTTON_CLASS} onClick={event}>
      <p>{title}</p>
    </div>
  );
};

export default Button;
