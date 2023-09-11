import { Button, FormControl, Grid, InputLabel } from "@mui/material";
import dayjs from "dayjs";
import React, { useState } from "react";
import "./ButtonTimePicker.css";
import { timeByType } from "./types";

function ButtonTimePicker({ onChange, value, reservationTimes }) {
  const timeOptions = new Array(27).fill(0).map((item, index) =>
    dayjs()
      .utc()
      .set("hour", index / 2 + 7)
      .set("minute", (index % 2) * 30)
  );

 
  const processedTimeOptions = timeOptions.map((item) => {
    const time = item.format("HH:mm");
    return reservationTimes.includes(time) ? "REZERVIRANO" : item;
  });
  console.log(processedTimeOptions);

  return (
    <div>
      <h3>ODABERI VRIJEME: </h3>
      <Grid container justifyContent="center" gap={8}>
        {processedTimeOptions.map((item) => (
          <Grid item xs={3} md={1}>
            {" "}
            <Button
              className="customMuiButton"
              onClick={() => onChange(item)}
              disabled={ typeof item ==="string"}
              variant={
                typeof item !== "string" &&
                item.isSame(value, "hour") &&
                item.isSame(value, "minutes")
                  ? "contained"
                  : "outlined"
              }
              size="medium"
              key={item}
            >
              {typeof item==="string" ? item :item.format("HH:mm")}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ButtonTimePicker;
