import React, {  useState } from "react";

import styles from "./Calendar.module.css";

import MuiModal from "../Components/MuiModal";
import ReactCalendar from "../Components/ReactCalendar";
import ReservationList from "../Components/ReservationList";
import { Grid } from "@mui/material";
import useReservationData from "../utils/useReservationData";

function Calendar() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const {refresh,reservationTimes}=useReservationData(selectedDate)

  return (<div className={styles.wrapper}>
    <div className={styles.container}>
      <Grid container  >
      
        <Grid container  justifyContent={"center"}  md={12} lg={6} p={4}>
          <ReactCalendar onChange={setSelectedDate} value={selectedDate} />
        </Grid>
     <Grid container justifyContent={"center"} md={12} lg={6} >
        <Grid container justifyContent={"center"} p={4}>
      
        <ReservationList reservationTimes={reservationTimes} />  </Grid>
        <Grid container justifyContent={"center"}>
        <MuiModal  refresh={refresh}  />  
        </Grid>
        </Grid>
      </Grid>
    </div></div>
  );
}

export default Calendar;
