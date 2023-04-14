import { Dispatch } from "react";
import { globalColor } from "./../../styles/globalStyle";
import styled from "styled-components";

export const CalenderSection = styled.div`
  .react-calendar__navigation {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-calendar__navigation__label,
  .react-calendar__navigation__label__prev,
  .react-calendar__navigation__arrow,
  .react-calendar__navigation__next-button {
    color: #fff;
    border: none;
    margin: 10px;
    font-size: 32px;
    line-height: 16px;
    font-weight: bold;
    justify-content: center;
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
    /* width: 100%; */
    background: #fff;
    padding: 5px;
    margin: 10px;
    box-sizing: border-box;
    text-align: center;
    background-color: #dcdcdc;
    abbr {
      color: #000;
      font-size: 1rem;
      font-weight: bold;
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
    background-color: #4318ff;
  }
  .react-calendar__tile--rangeStart,
  .react-calendar__tile--rangeEnd {
    width: 15px;
    color: #fff;
    background-color: #4318ff;
  }
  .react-calendar--selectRange {
    /* background-color: pink; */
  }
  .buttonSection {
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  width: 70px;
  color: #fff;
  border: none;
  padding: 15px;
  font-weight: bold;
  border-radius: 5px;
  background-color: #4318ff;
`;
