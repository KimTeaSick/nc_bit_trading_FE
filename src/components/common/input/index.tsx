import { ChangeEvent, ChangeEventHandler, FC } from "react";
import { InputStyle } from "@/styles/globalStyle";

interface InputProps {
  width: number;
  placeholder?: string;
  value?: string | number;
  type?: "number" | "text" | "password";
  onClick?: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  type,
  width,
  value,
  onClick,
  onChange,
  placeholder,
}) => {
  return (
    <InputStyle
      type={type}
      width={width}
      value={value}
      onChange={onChange}
      onClick={onClick && onClick}
      placeholder={placeholder}
    />
  );
};
