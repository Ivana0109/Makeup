import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import * as React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "dayjs/locale/hr";

import "./CalendarDatePicker.css";
import ButtonTimePicker from "./ButtonTimePicker";


dayjs.extend(utc);
dayjs.extend(timezone);
/*  minTime={dayjs(new Date(0, 0, 0, 8))}
            maxTime={dayjs(new Date(0, 0, 0, 18, 45))}*/

type Props = {
  titleDate: string;
  titleTime: string;
  valueTime: dayjs.Dayjs | null | undefined;
  valueDate: dayjs.Dayjs | null | undefined;
  setValueTime: (value: dayjs.Dayjs | null) => void;
  setValueDate: (value: dayjs.Dayjs | null) => void;
};

const BasicDateTimePicker = ({
  titleDate,

  valueTime,
  valueDate,
  setValueTime,
  setValueDate,
}: Props) => {


/**/


  
  return (
    <div>
      
    <LocalizationProvider adapterLocale={"hr"} dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]} >
        <DemoItem label={titleDate} >  
          <DatePicker   className="MyDatePicker"  views={['day']} 
          disablePast

        format="DD/MM/YYYY"
        timezone="UTC"
            value={dayjs(valueDate)}
            onChange={setValueDate}
            
          />
        </DemoItem>
  
      </DemoContainer>
      
    </LocalizationProvider>
   <ButtonTimePicker    onChange={setValueTime}  value={dayjs(valueTime)}/></div>
  );
};
export default BasicDateTimePicker;
