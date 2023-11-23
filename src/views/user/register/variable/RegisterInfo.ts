import { Dispatch, SetStateAction, useState } from "react";

export type RegisterInfoType = {
  name: string;
  email: string;
  phone: string;
  password: string;
  public: string;
  secret: string;
};

const useRegisterInfo = (): [
  RegisterInfoType,
  Dispatch<SetStateAction<RegisterInfoType>>
] => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    public: "",
    secret: "",
  });

  return [info, setInfo];
};

export default useRegisterInfo;
