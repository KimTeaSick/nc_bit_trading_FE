import { Input } from "@/components/common/Input";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import { AvgLineDetailOptionSection } from "./Setting.styled";

interface AvgLineDetailProps {
  lineName: string;
  range?: string;
  color?: string;
}

interface AvgLineDetailActiveProps extends AvgLineDetailProps {
  setRange: (e: any) => any;
  setColor: (e: any) => any;
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
        <Input width={100} value={range} type="number" onChange={setRange} />
      </AvgLineDetailOptionSection>
      <AvgLineDetailOptionSection>
        <div>색상 설정 :</div>
        <Input width={100} value={color} onChange={setColor} />
      </AvgLineDetailOptionSection>
    </div>
  );
};

export const AvgLineDetailComplete: FC<AvgLineDetailProps> = ({
  lineName,
  range,
  color,
}) => {
  return (
    <div>
      <p>{lineName}</p>
      <AvgLineDetailOptionSection>
        <div>기간 :</div>
        <div>{range} </div>
      </AvgLineDetailOptionSection>
      <AvgLineDetailOptionSection>
        <div>색상 :</div>
        <div>{color} </div>
      </AvgLineDetailOptionSection>
    </div>
  );
};
