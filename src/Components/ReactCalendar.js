import { useState } from "react";
import Calendar from "react-calendar";
import "./ReactCalendar.css";
import dayjs from "dayjs";

function ReactCalendar({ value, onChange }) {
  const handleClickDay = (value) => {
    onChange(value);
  };

  const tileDisabled = ({ activeStartDate, date, view }) => {
    const date1=new Date(date)
    const date2=new Date()
    date1.setHours(0,0,0,0)
    date2.setHours(0,0,0,0)
    console.log(date1.toLocaleString(),date2.toLocaleString(),date1 < date2)
    return date1 < date2
 }

  return (
    <div className="calendarContainer">
      <Calendar onChange={handleClickDay} value={value}  tileDisabled={tileDisabled} />
    </div>
  );
}

export default ReactCalendar;
