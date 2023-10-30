import { createContext, useContext } from "react";

type InputContextProps = {
  id: string;
  type: string;
  text: string;
  onChange: (e: any) => void;
};

type InputProps = InputContextProps & React.PropsWithChildren<{}>;

const InputContext = createContext({
  id: "",
  type: "text",
  text: "",
  onChange: (e: any) => {},
});

const InputWrapper = ({ id, text, onChange, type, children }: InputProps) => {
  const value = { id, text, onChange, type };
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

const useInputContext = () => {
  const context = useContext(InputContext);
  return context;
};

const Input = ({ ...props }) => {
  const { text, id, onChange, type } = useInputContext();
  return (
    <input
      id={id}
      type={type}
      value={text}
      placeholder="여기에 입력해 주세요."
      className="w-full border-none focus:outline-none"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const InputLabel = ({ children, ...props }: React.PropsWithChildren<{}>) => {
  const { id } = useInputContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

InputWrapper.Input = Input;
InputWrapper.Label = InputLabel;

export default InputWrapper;
