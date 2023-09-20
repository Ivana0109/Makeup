import React, { useCallback, useEffect, useState } from "react";

import styles from "./Calendar.module.css";
import axios from "axios";
import { EventSourceInput } from "@fullcalendar/core";
import { ReservationInfo } from "../Components/types";
import MuiModal from "../Components/MuiModal";
import ReactCalendar from "../Components/ReactCalendar";
import ReservationList from "../Components/ReservationList";
import { Grid } from "@mui/material";
import dayjs from "dayjs";
import useReservationData from "../utils/useReservationData";

function Calendar() {

  const [selectedDate, setSelectedDate] = useState(new Date());
  const {refresh,reservationTimes}=useReservationData(selectedDate)

  return (
    <div className={styles.container}>
      <Grid container  >
      
        <Grid container  justifyContent={"center"}  md={12} lg={6} p={4}>
          <ReactCalendar onChange={setSelectedDate} value={selectedDate} />
        </Grid>
     <Grid container justifyContent={"center"} md={12} lg={6}>
        <Grid container justifyContent={"center"} p={4}>
      
        <ReservationList reservationTimes={reservationTimes} />  </Grid>
        <Grid container p={4} justifyContent={"center"}>
        <MuiModal  refresh={refresh}  />  
        </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Calendar;
