import { Button, Grid } from "@mui/material";
import "./ReservationList.css";
import dayjs from "dayjs";
import { useContext } from "react";
import useTranslation from "../utils/useTranslate";
import { ReservationFormContext } from "../utils/ReservationFormContext";

function ReservationList({ reservationTimes }) {
  const translate = useTranslation();

  const timeOptions = new Array(27).fill(0).map((item, index) =>
    dayjs()
      .utc()
      .set("hour", index / 2 + 7)
      .set("minute", (index % 2) * 30)
      .format("HH:mm")
  );

  const processedTimeOptions = timeOptions.map((item) =>
    reservationTimes.includes(item) ? translate("reserved") : item
  );

  const { handleOpen } = useContext(ReservationFormContext);

  return (
    <Grid container className="reservationList">
      <Grid
        container
        alignContent={"center"}
        justifyContent={"start"}
        className="appointment"
      >
        {translate("appointmentHour")}
      </Grid>
      {processedTimeOptions.map((item) => (
        <Grid
          container
          alignContent={"center"}
          justifyContent={"center"}
          md={2}
          xs={3}
        >
          <Button
            onClick={handleOpen}
            disabled={item === translate("reserved")}
            className="reservationButton"
            size="medium"
            key={item}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}

export default ReservationList;
