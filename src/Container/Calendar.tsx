import React, { useEffect, useState } from "react";
import CalendarDisplay from "../Components/CalendarDisplay";
import CalendarModal from "../Components/CalendarModal";
import styles from "./Calendar.module.css";
import axios from "axios";
import { EventSourceInput } from "@fullcalendar/core";
import { ReservationInfo } from "../Components/types";
import MuiModal from "../Components/MuiModal";




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

        <MuiModal/>
      </div>
    </div>
  );
}

export default Calendar;
