import { FC } from "react";
import Admin from "@/layouts/admin";
import LoginComponent from "@/views/user/login";

const Login: FC = () => {
  return (
    <Admin>
      <LoginComponent />
    </Admin>
  );
};

export default Login;
