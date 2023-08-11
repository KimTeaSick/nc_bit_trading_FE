import { FC } from "react";
import RegisterForm from "./components/RegisterForm";

const RegisterComponent: FC = () => {
  return (
    <div className="flex flex-col gap-2 w-full h-full justify-center items-center ">
      <RegisterForm />
    </div>
  );
};

export default RegisterComponent;
