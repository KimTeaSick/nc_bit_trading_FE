import { Dispatch, SetStateAction, useState } from "react";

export type LoginInfoType = {
  email: string;
  password: string;
};

export const useLoginInfo = (): [
  LoginInfoType,
  Dispatch<SetStateAction<LoginInfoType>>
] => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  return [loginInfo, setLoginInfo];
};
