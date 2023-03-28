import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const CalenderSection = styled.div`
  width: 50%;
  .react-calendar__navigation {
    height: 35px;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid #000;
  }

  .react-calendar__navigation__label,
  .react-calendar__navigation__label__prev,
  .react-calendar__navigation__arrow,
  .react-calendar__navigation__next-button {
    color: #000;
    border: none;
    font-size: 13px;
    font-weight: 500;
    background-color: #fff;
  }
  .react-calendar__navigation__label > span {
    color: #000;
    font-size: 13px;
    font-weight: 500;
    background-color: #fff;
  }
  .react-calendar__tile,
  .react-calendar__month-view__days__day {
    width: 25px;
  }
  .react-calendar__month-view__weekdays {
    width: 100%;
    background: #fff;
    padding-top: 10px;
    text-align: center;
    abbr {
      color: #000;
      font-size: 1.1rem;
      text-decoration: none;
    }
  }
  .react-calendar__tile {
    color: #000;
    height: 35px;
    border: none;
    background: #fff;
    text-align: center;
  }
  .react-calendar__month-view__days {
    background-color: #fff;
  }
  .react-calendar__tile .react-calendar__month-view__days__day {
    width: 25px;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    color: #fff;
    background-color: ${globalColor.buttonPointColor};
  }
  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
    width: 15px;
    color: #fff;
    background-color: ${globalColor.buttonPointColor};
  }
  .react-calendar--selectRange {
    background-color: pink;
  }
`;

export const Button = styled.button`
  width: 70px;
  color: #fff;
  border: none;
  padding: 15px;
  font-weight: bold;
  border-radius: 5px;
  background-color: ${globalColor.buttonPointColor};
`;
