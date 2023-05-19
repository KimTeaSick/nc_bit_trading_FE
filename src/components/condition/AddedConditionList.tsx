import { FC } from "react";
import { Key_namesType, Key_names_returnType } from "./condition";

interface Props {
  state: any;
}

const AddedConditionList: FC<Props> = ({ state }) => {
  const find_flag = (state: any) => {
    const keys = Object.keys(state);
    const list = [];
    for (let index = 0; index < Object.keys(state).length; index++) {
      if (Object.values(state)[index].flag === "1") {
        list.push({ key: keys[index], condition: Object.values(state)[index] });
      }
    }
    return list;
  };
  const key_name_setter = (key): Key_names_returnType => {
    const key_names: Key_namesType = {
      P_ran: "주가 범위",
      P_flu: "주가 등락률",
      MASP_com: "주가 이동평균 비교",
      MASP_com_d: "주가 이동평균 2개 비교",
      MASP_dis: "이동평균 이격도",
      MASP_t: "주가 이동 평균 추세",
      transaction_amount: "거래 대금",
      V_a_v: "평균 거래량",
      volume: "거래량 ",
      D_over: "이격도 기준값 돌파",
      D_range: "이격도 기준값 범위",
      D_RV_up_down: "이격도 기준값 이상 이하",
      D_t: "이격도 추세",
      D_re: "이격도 반전",
      MACD_l_o: "MACD 기준선 돌파",
      MACD_l_c: "MACD 기준선 비교",
      MACD_v_o: "MACD 기준값 돌파",
      MACD_v_u_d: "MACD 기준값 이상 이하",
      MACD_v_r: "MACD 기준값 범위",
      MACD_t: "MACD 추세",
      MACD_re: "MACD 반전",
      MACDS_v: "MACD Signal 기준값 돌파",
      MACDS_v_u_d: "MACD Signal 기준값 이상 이하",
      MACDS_v_r: "MACD Signal 기준값 범위",
      MACDS_t: "MACD Signal 추세",
      MACDS_r: "MACD Signal 반전",
    };
    return key_names[key];
  };
  const condition_frame = (state: any) => {
    const key = Object.keys(state);
    const values = Object.values(state);
    console.log("value", values);

    return values.map((value: any, index: number) => (
      <div className="flex gap-2 ml-2" key={index}>
        <div>{key[index]}:</div>
        <div>{values[index]}</div>
      </div>
    ));
  };

  return (
    <div className="bg-white">
      {find_flag(state)?.map((value, index) => (
        <div
          className="flex items-center gap-1  border-b border-gray-600 p-2"
          key={index}
        >
          <div className="font-bold">{key_name_setter(value?.key)}</div>
          <div className="flex items-center">
            {condition_frame(value?.condition)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedConditionList;
