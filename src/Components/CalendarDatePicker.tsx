import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import 'dayjs/locale/hr';

dayjs.extend(utc);
dayjs.extend(timezone);
/*  minTime={dayjs(new Date(0, 0, 0, 8))}
            maxTime={dayjs(new Date(0, 0, 0, 18, 45))}*/

type Props={
  titleDate:string,
  titleTime:string,
  valueTime:dayjs.Dayjs | null | undefined,
  valueDate:dayjs.Dayjs | null | undefined,
  setValueTime:(value: dayjs.Dayjs | null) => void
  setValueDate:(value: dayjs.Dayjs | null) => void
}

const BasicDateTimePicker = ({
  titleDate,
  titleTime,
  valueTime,
  valueDate,
  setValueTime,
  setValueDate,
} : Props) => {



  const cssStyle = {
    padding: " 20px",
    backgroundColor: "white",
    border: "rgb(89, 186, 178) solid 4px",
    borderRadius: " 30px",
    color: "black",
    fontSize: "20px",
    display: " flex",
    gap: "20px",
    alignItems: "center",
    justifyContent: "space-between",
  };



  return (
    <LocalizationProvider adapterLocale={"hr"} dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DemoItem label={titleDate}>
          <DatePicker
            sx={cssStyle}
            timezone="UTC"
            value={dayjs(valueDate)}
            onChange={setValueDate}
            localeText={{}}
            
          />
        </DemoItem>
        <DemoItem label={titleTime}>
          <StaticTimePicker
            localeText={{
              toolbarTitle: "Odaberi vrijeme",
              okButtonLabel: "POTVRDI",
              cancelButtonLabel: "ODBACI",
            }}
            ampm={false}
            sx={cssStyle}
            timezone="UTC"
            value={dayjs(valueTime)}
            onChange={setValueTime}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
};
export default BasicDateTimePicker;
