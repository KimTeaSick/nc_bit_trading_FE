import { FC } from "react";
import { Input } from "@/components/common/input";
import Button from "@/components/common/button";
import useRegisterInfo, { RegisterInfoType } from "../variable/RegisterInfo";
import { user_regist_envent } from "@/pages/api/user";
import { register_return_event } from "../variable/registReturn";
import { useRouter } from "next/router";
import { PlatformSelect } from "./PlatformSelect";

const RegisterForm: FC = () => {
  const [info, setInfo] = useRegisterInfo();
  const history = useRouter();

  const user_regist_btn_evnet = async (body: RegisterInfoType) => {
    Object.values(body).forEach((element) => {
      if (element === "") {
        return alert("공백값이 없어야 합니다!");
      }
    });
    const res = await user_regist_envent(body);
    const condition = register_return_event(res);
    if (condition === 200) history.push("/user/login");
  };

  return (
    <div className="flex flex-col gap-2 w-1/2 h-[auto] justify-center bg-navy-50 p-4 rounded-lg items-center">
      <div>
        <p>이용 플랫폼</p>
        <PlatformSelect
          setValue={(e) => setInfo({ ...info, platform: e.target.value })}
        />
      </div>
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
        <p>전화번호</p>
        <Input
          width="80"
          height={50}
          value={info.phone}
          onClick={() => setInfo({ ...info, phone: "" })}
          onChange={(e) => setInfo({ ...info, phone: e.target.value })}
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
        <Button
          title="회원가입"
          event={
            () => user_regist_btn_evnet(info)
            // console.log(info)
          }
        />
      </div>
    </div>
  );
};

export default RegisterForm;
