import { FC, useState } from "react";
import Calendar from "react-calendar";
import { CalenderSection } from "./CustomCalender.styled";

const CustomCalendar: FC = () => {
  const [startDate, setStartDate] = useState("1");
  const [endDate, setEndDate] = useState("2");

  const selectDate = (
    value: Date,
    event: MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(value);
    console.log(event);
  };
  return (
    <>
      <CalenderSection>
        <Calendar
          selectRange={true}
          onClickDay={(value, event) => selectDate(value, event)}
        />
      </CalenderSection>
      <div>{startDate}</div>
      <div>{endDate}</div>
    </>
  );
};

export default CustomCalendar;
