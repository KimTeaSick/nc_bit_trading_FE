import { FC } from "react";
import { Input } from "@/components/common/input";
import Button from "@/components/common/button";
import useRegisterInfo from "../variable/RegisterInfo";
import { user_regist_envent } from "@/pages/api/user";
import { register_return_event } from "../variable/registReturn";
import { useRouter } from "next/router";

const RegisterForm: FC = () => {
  const [info, setInfo] = useRegisterInfo();
  const history = useRouter();
  const user_regist_btn_evnet = async () => {
    const res = await user_regist_envent(info);
    const condition = register_return_event(res);
    if (condition === 200) history.push("/user/login");
  };

  return (
    <div className="flex flex-col gap-2 w-1/2 h-[50vh] justify-center bg-navy-50 p-4 rounded-lg items-center">
      <div>
        <p>이름</p>
        <Input
          width="80"
          height={50}
          value={info.name}
          onClick={() => setInfo({ ...info, name: "" })}
          onChange={(e) => setInfo({ ...info, name: e.target.value })}
        />
      </div>
      <div>
        <p>이메일</p>
        <Input
          width="80"
          height={50}
          value={info.email}
          onClick={() => setInfo({ ...info, email: "" })}
          onChange={(e) => setInfo({ ...info, email: e.target.value })}
        />
      </div>
      <div>
        <p>비밀번호</p>
        <Input
          width="80"
          height={50}
          type="password"
          value={info.password}
          onClick={() => setInfo({ ...info, password: "" })}
          onChange={(e) => setInfo({ ...info, password: e.target.value })}
        />
      </div>
      <div>
        <p>접속 키</p>
        <Input
          width="80"
          height={50}
          value={info.public}
          onClick={() => setInfo({ ...info, public: "" })}
          onChange={(e) => setInfo({ ...info, public: e.target.value })}
        />
      </div>
      <div>
        <p>비밀 키</p>
        <Input
          width="80"
          height={50}
          value={info.secret}
          onClick={() => setInfo({ ...info, secret: "" })}
          onChange={(e) => setInfo({ ...info, secret: e.target.value })}
        />
      </div>
      <div>
        <Button title="회원가입" event={user_regist_btn_evnet} />
      </div>
    </div>
  );
};

export default RegisterForm;
