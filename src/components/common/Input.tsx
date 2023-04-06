import { ChangeEvent, ChangeEventHandler, FC } from "react";
import { InputStyle } from "@/styles/globalStyle";

interface InputProps {
  width: number;
  type?: "number" | "text" | "password";
  placeholder?: string;
  value?: string | number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = ({
  type,
  width,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <InputStyle
      type={type}
      width={width}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};
