import { CalenderSection, Button } from "./CustomCalender.styled";
import React, { FC, MouseEvent, useCallback, useEffect, useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";
import { Value } from "react-calendar/dist/cjs/shared/types";
import { getDateOrderList } from "@/pages/api/tradingList";
import { getCurrentDate } from "@/lib/dateFormat";
import { useDispatch } from "react-redux";

interface CustomCalendarProps {
  onClose: () => void;
}

const CustomCalendar: FC<CustomCalendarProps> = ({ onClose }) => {
  const dispatch = useDispatch<any>();

  const [selectDate, setSelectDate] = useState<Value>([]);

  const chooseDate = useCallback((value: any, event: MouseEvent) => {
    const value1 = getCurrentDate(value[0]);
    const value2 = getCurrentDate(value[1]);
    setSelectDate([value1, value2]);
  }, []);

  const eveeent = () => {
    dispatch(getDateOrderList({ date: selectDate, page: 1 }));
    onClose();
  };

  return (
    <>
      <CalenderSection>
        <Calendar
          selectRange={true}
          onChange={(value, event) => chooseDate(value, event)}
          formatDay={(locale, date) => moment(date).format("DD")}
          showNeighboringMonth={false}
        />
        <div className="buttonSection">
          <Button onClick={onClose}>닫기</Button>
          <Button onClick={eveeent}>확인</Button>
        </div>
      </CalenderSection>
    </>
  );
};

export default React.memo(CustomCalendar);
