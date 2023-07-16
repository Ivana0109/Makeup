import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./DemoApp.css";
import axios from "axios";

      

function DemoApp({reservations}) {

  

  const renderEventContent=(eventInfo)=> {
    return (
      <div className="calendarContent">
        <b>{eventInfo.timeText}</b>
        <br></br>
        <i>{eventInfo.event.title}</i>
        <i>{eventInfo.event.description}</i> </div>
    );
  }

  const handleDateClick = (info) => {
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

export default DemoApp;
