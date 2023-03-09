import { Input } from "@/styles/globalStyle";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { AvgLineDetailOptionSection } from "./Setting.styled";

interface AvgLineDetailProps {
  lineName: string;
  range: number;
  color: string;
}

interface AvgLineDetailActiveProps extends AvgLineDetailProps {
  setRange: Dispatch<SetStateAction<number>>;
  setColor: Dispatch<SetStateAction<string>>;
}
export const AvgLineDetailActive: FC<AvgLineDetailActiveProps> = ({
  lineName,
  range,
  color,
  setRange,
  setColor,
}) => {
  return (
    <div>
      <p>{lineName}</p>
      <AvgLineDetailOptionSection>
        <div>기간 설정 :</div>
        <Input
          width={150}
          value={range}
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setRange(e.target.value)
          }
        />
      </AvgLineDetailOptionSection>
      <AvgLineDetailOptionSection>
        <div>색상 설정 :</div>
        <Input
          width={150}
          value={color}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setColor(e.target.value)
          }
        />
      </AvgLineDetailOptionSection>
    </div>
  );
};

export const AvgLineDetailComplete: FC<AvgLineDetailProps> = ({
  lineName,
  range,
  color,
}) => {
  console.log(range);
  console.log(color);

  return (
    <div>
      <p>{lineName}</p>
      <AvgLineDetailOptionSection>
        <div>기간 설정 :</div>
        <div>{range} </div>
      </AvgLineDetailOptionSection>
      <AvgLineDetailOptionSection>
        <div>색상 설정 :</div>
        <div>{color} </div>
      </AvgLineDetailOptionSection>
    </div>
  );
};
