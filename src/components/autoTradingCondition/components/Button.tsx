import { Spinner } from "@/components/common/Loading.styled";
import { FC } from "react";

const BUTTON_CLASS = `font-bold h-auto bg-blueSecondary p-3 text-white rounded-md flex justify-center items-center cursor-pointer`;
const EXTENED_CLASS = "bg-red-600";

interface Props {
  title: string;
  event: () => void;
  type?: boolean;
  loading?: boolean;
}

const Button: FC<Props> = ({ title, event, type, loading }) => {
  return (
    <button
      className={`${BUTTON_CLASS} ${type && EXTENED_CLASS}`}
      onClick={event}
      disabled={loading}
    >
      {loading ? <Spinner /> : null}
      <p>{title}</p>
    </button>
  );
};

export default Button;
