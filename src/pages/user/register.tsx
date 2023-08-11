import { FC } from "react";
import Admin from "@/layouts/admin";
import RegisterComponent from "@/views/user/register";

const Register: FC = () => {
  return (
    <Admin>
      <RegisterComponent />
    </Admin>
  );
};

export default Register;
