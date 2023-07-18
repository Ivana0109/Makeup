import React, { HtmlHTMLAttributes, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./CalendarDisplay.css";
import axios from "axios";
import { ReservationInfo } from "./types";
import { CustomContentGenerator, EventContentArg } from "@fullcalendar/core";

      
 type Props={
reservations: ReservationInfo
 }
function CalendarDisplay({reservations}:Props) {

  

  const renderEventContent=( eventInfo?: EventContentArg )=> {
    return eventInfo && ( 
      <div className="calendarContent">
        <b>{eventInfo.timeText}</b>
        <br></br>
        <i>{eventInfo.event.title}</i>
        <i>{eventInfo.event.extendedProps.description}</i> </div>
    );
  }

  const handleDateClick = (info:DateClickArg) => {
    // bind with an arrow function
    alert("Odaberi željeno vrijeme");
    console.log(info)
  };




  return (
    <div className="block">

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        eventContent={renderEventContent}
        allDaySlot={false}
        dateClick={handleDateClick}
        initialView="timeGrid"
        weekends={false}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "timeGridWeek,timeGridDay,timeGrid", // user can switch between the two
        }}
        timeZone="Europe/Zagreb"
        events={reservations}
      />{" "}
    </div>
  );
}

export default CalendarDisplay;
