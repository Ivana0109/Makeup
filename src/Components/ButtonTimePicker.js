import { Button,  Grid,} from "@mui/material";
import dayjs from "dayjs";

import "./ButtonTimePicker.css";

import useTranslation from "../utils/useTranslate";

function ButtonTimePicker({ onChange, value, reservationTimes }) {
const translate=useTranslation()

  const timeOptions = new Array(27).fill(0).map((item, index) =>
    dayjs()
      .utc()
      .set("hour", index / 2 + 7)
      .set("minute", (index % 2) * 30)
  );

 
  const processedTimeOptions = timeOptions.map((item) => {
    const time = item.format("HH:mm");
    return reservationTimes.includes(time) ? translate("reserved") : item;
  });
  console.log(processedTimeOptions);

  return (
    <div>
      <div className="timePicker">{translate("selectTime")} </div>
      <Grid container justifyContent="center" >
        {processedTimeOptions.map((item) => (
          <Grid container justifyContent="center" alignItems={"center"}  lg={2} xs={4} >
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
