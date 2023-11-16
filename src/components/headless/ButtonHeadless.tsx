import { createContext, useContext } from "react";

type ButtonContextProps = {
  title: string;
  event: () => void;
};

type ButtonProps = ButtonContextProps & React.PropsWithChildren<{}>;

const ButtonContext = createContext({
  title: "",
  event: () => {},
});

const useButtonContext = () => {
  const context = useContext(ButtonContext);
  return context;
};

export const ButtonWrapper = ({ title, event, children }: ButtonProps) => {
  const value = { title, event };
  return (
    <ButtonContext.Provider value={value}>{children}</ButtonContext.Provider>
  );
};
const Body = ({ children, ...props }: React.PropsWithChildren<{}>) => {
  const { event } = useButtonContext();
  return <div onClick={event}>{children}</div>;
};

const Label = ({ ...props }) => {
  const { title } = useButtonContext();
  return <label className="cursor-pointer">{title}</label>;
};

ButtonWrapper.Label = Label;
ButtonWrapper.Body = Body;
export default ButtonWrapper;
