import ButtonWrapper from "@/components/headless/ButtonHeadless";
import { FC } from "react";

const BUTTON_CLASS = `font-bold h-auto bg-blueSecondary p-3 text-white rounded-md flex justify-center items-center cursor-pointer`;
const EXTENED_CLASS = "bg-red-600";

interface Props {
  title: string;
  event: () => void;
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

type SellProps = {
  title: string;
  event: () => void;
};

export const SellButton = ({ title, event }: SellProps) => {
  return (
    <div className="bg-red-500 rounded-md text-white px-2 cursor-pointer">
      <ButtonWrapper title={title} event={event}>
        <ButtonWrapper.Body>
          <ButtonWrapper.Label />
        </ButtonWrapper.Body>
      </ButtonWrapper>
    </div>
  );
};

export const SellModalButton = ({ title, event }: SellProps) => {
  return (
    <ButtonWrapper title={title} event={event}>
      <ButtonWrapper.Body>
        <div className="bg-red-500 rounded-md text-white p-2 cursor-pointer flex justify-center font-bold text-lg">
          <ButtonWrapper.Label />
        </div>
      </ButtonWrapper.Body>
    </ButtonWrapper>
  );
};
