import { LoginInfoType } from "@/views/user/login/variable/login";
import { post, get } from ".";

export const login_event = async (body: LoginInfoType) => {
  const res: any = await post("user/login", body);
  console.log("login_event ::: ::: ", res);

  localStorage.setItem("access_token", res.access_token);
  return res;
};

export const verify_token = async () => {
  const token = localStorage.getItem("access_token");
  console.log("verify token ::: ::: ", token);
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const res: any = await get("user/verify", {}, headers);
  return res;
};
