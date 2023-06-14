import { Input } from "@/components/common/input";
import { ChangeEvent, FC } from "react";
import Button from "./Button";
import Link from "next/link";

interface Props {
  name: string;
  setName: (e: ChangeEvent<HTMLInputElement>) => void;
  registerEvent: (type: string) => void;
  ATEvent: () => void;
  AnD: (name: string, type: number) => void;
  type: boolean;
}

const NameInput: FC<Props> = ({
  name,
  setName,
  registerEvent,
  ATEvent,
  AnD,
  type,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <p className="font-bold mr-5">조건 이름 :</p>
        <Input
          width={320}
          height={50}
          value={name}
          onChange={(e) => setName(e)}
          disable={!type}
        />
      </div>
      <div className="flex gap-2">
        {!type && (
          <>
            <Button title={"삭제"} type={!type} event={() => AnD(name, 0)} />
            <Button title={"사용"} event={() => AnD(name, 1)} />
          </>
        )}
        <Button
          title={type ? "등록" : "수정"}
          event={() =>
            type ? registerEvent("regist") : registerEvent("update")
          }
        />
        <Link href={"/admin/autotrading"}>
          <Button title="자동매매" event={() => console.log("asd")} />
        </Link>
      </div>
    </div>
  );
};

export default NameInput;
