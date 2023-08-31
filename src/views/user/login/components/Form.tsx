import Button from "@/components/common/button";
import { Input } from "@/components/common/input";
import { LoginInfoType } from "../variable/login";
import { Dispatch, FC, SetStateAction } from "react";
import { login_event } from "@/pages/api/user";
import { useRouter } from "next/router";

interface Props {
  value: LoginInfoType;
  setValue: Dispatch<SetStateAction<LoginInfoType>>;
}

const LoginForm: FC<Props> = ({ value, setValue }) => {
  // const history = useRouter();

  const log_out = () => (window.location.href = "/user/register");

  const loginButtonClick = async () => {
    const res = await login_event(value);
    if (res === 200) {
      window.location.href = "/admin/default";
      return;
    } else {
      alert("로그인 정보가 불 일치 합니다.");
      return;
    }
  };

  return (
    <div className="flex flex-col gap-2 w-1/2 h-[50vh] justify-center bg-navy-50 p-4 rounded-lg items-center">
      <p className="self-center font-bold text-4xl text-navy-700 my-3">Login</p>
      <div className="flex w-2/3 flex-col gap-2">
        <Input
          width="80"
          height={50}
          placeholder="email"
          onChange={(e) => setValue({ ...value, email: e.target.value })}
        />
        <Input
          width="80"
          height={50}
          placeholder="password"
          type="password"
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />
      </div>
      <div className="flex w-2/3 flex-col gap-2">
        <Button title="로그인" event={loginButtonClick} />
        {/* <Button title="검증" event={_get_user_info} /> */}
        <Button title="회원가입" event={log_out} />
      </div>
    </div>
  );
};

export default LoginForm;
