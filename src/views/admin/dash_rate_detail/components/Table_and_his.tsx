import { FC } from "react";
import { HIS_COL, TABLE_ROW, his_vaule_change } from "../variables/table";
import * as CSS from "../variables/Table_and_his_css";
import { krwChage } from "@/lib/krwChage";

interface Props {
  type: string; // 0: 일 1: 주 2:월
  data: any;
  COL: string[];
}

const Table_and_his: FC<Props> = ({ type, data, COL }) => {
  return (
    <div className={CSS.WRAPPER}>
      <div className={CSS.TITILE_SEC}>
        <p className={CSS.TITLE_AND_DEPOSIT}>{type.replace("_", " ")}</p>
        <p className={CSS.SUB_TITLE}>
          데이터는 전일 00시 기준으로 저장 됩니다.
        </p>
      </div>
      <div className={CSS.TABLE_WRAPPER + CSS.TABLE_ROUNDED}>
        <div className={CSS.TABLE_BODY}>
          <div className={CSS.ROW}>
            {TABLE_ROW.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </div>
          {COL.map((value, index) => (
            <div key={index} className={CSS.ROW}>
              <p>{value}</p>
              <p>
                {data?.table_data[index]
                  ? krwChage(Number(data.table_data[index][1]).toFixed(0)) +
                    " 원"
                  : "-"}
              </p>
              <p>
                {data?.table_data[index]
                  ? Number(data.table_data[index][2]).toFixed(2) + " %"
                  : "-"}
              </p>
            </div>
          ))}
        </div>
      </div>
      <p className={CSS.SUB_TITLE}>* 아래로 스크롤해서 내역을 확인하세요</p>
      <div className={CSS.HIS_WRAPPER}>
        <div className={CSS.HIS_COL}>
          {HIS_COL.map((value, index) => (
            <div className="w-[12.5%]" key={index}>
              {value}
            </div>
          ))}
        </div>
        <div className={CSS.HIS_CONTENT_WRAPPER}>
          {data?.his_data.map((value: any[], index: number) => (
            <div key={index} className={CSS.HIS_CONTENT}>
              {value.map((v, i) => (
                <div className="w-[12.5%] overflow-hidden" key={i}>
                  {i === 3 ? krwChage(v) : his_vaule_change(v)}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table_and_his;
