import { ChangeEvent, ChangeEventHandler, FC } from "react";
import { InputStyle } from "@/styles/globalStyle";

interface InputProps {
  width: number;
  height?: number;
  placeholder?: string;
  value?: string | number;
  type?: "number" | "text" | "password";
  disable?: boolean;
  onClick?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  type,
  width,
  value,
  height,
  onClick,
  onChange,
  disable,
  placeholder,
}) => {
  return (
    <InputStyle
      type={type}
      width={width}
      height={height ? height : 27}
      value={value}
      disabled={disable}
      onChange={onChange}
      onClick={onClick && onClick}
      placeholder={placeholder}
    />
  );
};
