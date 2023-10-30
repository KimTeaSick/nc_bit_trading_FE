import { createContext, useContext } from "react";

type RadioContextProps = {
  id: string;
  isChecked: number;
  onChange: (e: any) => void;
};

type RadioProps = RadioContextProps & React.PropsWithChildren<{}>;

const RadioContext = createContext({
  id: "",
  isChecked: 1,
  onChange: (e: any) => {},
});

const RadioWrapper = ({ id, isChecked, onChange, children }: RadioProps) => {
  const value = { id, isChecked, onChange };
  return (
    <RadioContext.Provider value={value}>{children}</RadioContext.Provider>
  );
};

const useRadioContext = () => {
  const context = useContext(RadioContext);
  return context;
};

const Radio = ({ ...props }) => {
  const { id, isChecked, onChange } = useRadioContext();
  return (
    <input
      name={id}
      type="radio"
      value={props.rValue}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

const Label = ({ children, ...props }: React.PropsWithChildren<{}>) => {
  const { id } = useRadioContext();
  return (
    <label htmlFor={id} {...props}>
      {children}
    </label>
  );
};

RadioWrapper.Radio = Radio;
RadioWrapper.Label = Label;

export default RadioWrapper;
