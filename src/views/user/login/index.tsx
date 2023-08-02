import { FC } from "react";
import { useLoginInfo } from "./variable/login";
import LoginForm from "./components/Form";

const LoginComponent: FC = () => {
  const [loginInfo, setLoginInfo] = useLoginInfo();

  return (
    <div className="flex flex-col gap-2 w-full h-full justify-center items-center ">
      <LoginForm value={loginInfo} setValue={setLoginInfo} />
    </div>
  );
};

export default LoginComponent;
