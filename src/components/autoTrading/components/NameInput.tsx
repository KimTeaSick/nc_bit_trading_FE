import { Input } from "@/components/common/input";
import { SearchButton } from "@/components/search/Condition";
import { ChangeEvent, FC } from "react";
import Button from "./Button";

interface Props {
  name: string;
  setName: (e: ChangeEvent<HTMLInputElement>) => void;
  registerEvent: () => void;
  ATEvent: () => void;
}

const NameInput: FC<Props> = ({ name, setName, registerEvent, ATEvent }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <p className="font-bold mr-5">조건 이름 :</p>
        <Input
          width={320}
          height={50}
          value={name}
          onChange={(e) => setName(e)}
        />
      </div>
      <div className="flex gap-2">
        <Button title="등록" event={registerEvent} />
        <Button title="자동매매" event={() => console.log("asd")} />
      </div>
    </div>
  );
};

export default NameInput;
