import React, { useEffect, useState } from "react";
import CalendarDisplay from "../Components/CalendarDisplay";
import CalendarModal from "../Components/CalendarModal";
import styles from "./Calendar.module.css";
import axios from "axios";
import { EventSourceInput } from "@fullcalendar/core";
import { ReservationInfo } from "../Components/types";




function Calendar() {

  const [reservations, setReservations] = useState<ReservationInfo>([]);
  const refresh = () => {
    axios
      .get("http://localhost:8000/data")
      .then((res) => setReservations(res.data));
  };

  useEffect(()=>{refresh()},[]) 
  return (
    <div className={styles.container}>
      <div >
        <CalendarDisplay  reservations={reservations}/>

        <CalendarModal refresh={refresh}  />
      </div>
    </div>
  );
}

export default Calendar;
