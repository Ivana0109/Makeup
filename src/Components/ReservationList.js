import { Button, Grid } from "@mui/material";
import React from "react";
import "./ReservationList.css";
import dayjs from "dayjs";
import { useMemo } from "react";
import { timeByType } from "./types";
import { Link } from "react-router-dom";
import useTranslation from "../utils/useTranslate";


function ReservationList({ reservationTimes }) {
const translate=useTranslation()

  const timeOptions = new Array(27).fill(0).map((item, index) =>
    dayjs()
      .utc()
      .set("hour", index / 2 + 7)
      .set("minute", (index % 2) * 30)
      .format("HH:mm")
  );

 
  const processedTimeOptions =timeOptions.map((item) =>
      reservationTimes.includes(item) ? translate("reserved") : item
    );




  return (
    <Grid container  className="reservationList">
    
      <Grid container alignContent={"center"} justifyContent={"start"} paddingLeft={7} className="appointment" >
    
       {translate("appointmentHour")}
      </Grid>
      {processedTimeOptions.map((item) => (
        <Grid container alignContent={"center"} justifyContent={"center"} md={4} xs={6} >
        
          <Button 
              disabled={item ===translate("reserved")} className="reservationButton" size="medium" key={item}>
         
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default ReservationList;
