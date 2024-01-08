import { post, get } from ".";
import { LoginInfoType } from "@/views/user/login/variable/login";
import { RegisterInfoType } from "@/views/user/register/variable/RegisterInfo";

export const login_event = async (body: LoginInfoType): Promise<200 | 444> => {
  let res;
  if (body.platform === "1") {
    res = await post("user/login", body);
  } else {
    res = await post("http://localhost:8889/user/login", body);
  }
  if (res.status === 200) {
    localStorage.clear();
    localStorage.setItem("user_auto_active", res.data.auto_active);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("user_name", res.data.name);
    localStorage.setItem("user_platform", res.data.platform);
    localStorage.setItem("user_idx", res.data.idx);
    return res.status;
  } else {
    return res.status;
  }
};

export const user_regist_envent = async (body: RegisterInfoType) => {
  const res = await post("user/register", body);
  return res;
};
