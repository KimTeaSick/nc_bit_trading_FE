import { Input } from "@/components/common/input";
import { ChangeEvent, FC, useState } from "react";
import Button from "./Button";
import Link from "next/link";
import { controlAuto } from "@/pages/api/autotradingCondition";

interface Props {
  name: string;
  idx: number;
  setName: (e: ChangeEvent<HTMLInputElement>) => void;
  registerEvent: (type: string) => void;
  autoTradingStatus: string | null;
  AnD: (idx: number, type: number) => void;
  type: boolean;
}

const NameInput: FC<Props> = ({
  idx,
  name,
  type,
  autoTradingStatus,
  AnD,
  setName,
  registerEvent,
}) => {
  const [loading, setLoading] = useState(false);

  const AUTO_BTN = async () => {
    setLoading(true);
    if (autoTradingStatus === "1") {
      alert(`자동매매 실행 중 사용 할 수 없습니다.`);
      setLoading(false);
      return;
    }
    const res = await controlAuto(true);
    if (res === 200) {
      setLoading(false);
      localStorage.setItem("user_auto_active", "1");
      window.location.href = "/admin/autotrading";
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center w-1/5">
        <p className="w-fit mr-2 font-bold dark:text-white">조건 이름 : </p>
        <Input
          width={"w-3/5"}
          height={50}
          value={name}
          onChange={(e) => setName(e)}
          disable={!type}
        />
      </div>
      <div className="flex gap-2">
        {!type && (
          <>
            <Button title={"삭제"} type={!type} event={() => AnD(idx, 0)} />
            <Button title={"사용"} event={() => AnD(idx, 1)} />
          </>
        )}
        <Button
          title={type ? "등록" : "수정"}
          event={() =>
            type ? registerEvent("regist") : registerEvent("update")
          }
        />
        <Link href={"/admin/autotrading"}>
          <Button
            title="자동매매"
            event={() => {
              AUTO_BTN();
            }}
            loading={loading}
          />
        </Link>
      </div>
    </div>
  );
};

export default NameInput;
