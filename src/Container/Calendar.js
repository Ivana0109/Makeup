import React, { useEffect, useState } from "react";
import DemoApp from "../Components/DemoApp";
import CalendarModal from "../Components/CalendarModal";
import styles from "./Calendar.module.css";
import axios from "axios";
function Calendar() {

  
  const [reservations, setReservations] = useState([]);
  const refresh = () => {
    axios
      .get("http://localhost:8000/data")
      .then((res) => setReservations(res.data));
  };

  useEffect(()=>{refresh()},[]) 
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <DemoApp  reservations={reservations}/>

        <CalendarModal refresh={refresh}  />
      </div>
    </div>
  );
}

export default Calendar;
