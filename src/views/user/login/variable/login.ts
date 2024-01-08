import { Dispatch, SetStateAction, useState } from "react";

export type LoginInfoType = {
  platform: string;
  email: string;
  password: string;
};

export const useLoginInfo = (): [
  LoginInfoType,
  Dispatch<SetStateAction<LoginInfoType>>
] => {
  const [loginInfo, setLoginInfo] = useState({
    platform: "1",
    email: "",
    password: "",
  });
  return [loginInfo, setLoginInfo];
};
