import React, { useEffect, useMemo, useState } from "react";
import styles from "./CalendarForm.module.css";

import { Button, Grid } from "@mui/material";

import CalendarDatePicker from "./CalendarDatePicker";

import axios from "axios";
import dayjs from "dayjs";
import MuiInput from "./MuiInput";
import SelectInput from "./SelectInput";
import useReservationData from "../utils/useReservationData";
import { timeByType } from "./types";
import useTranslation from "../utils/useTranslate";
type CalendarInfo = {
  firstName: string;
  number: string;
  email: string;
  type: "1"| "2"|"3"|undefined;
  date: dayjs.Dayjs | null | undefined;
  time: dayjs.Dayjs | null | undefined;
};

type Props = {
  refresh?: () => void;
};
function CalendarForm({ refresh }: Props) {
const translate=useTranslation()

  const [data, setData] = useState<CalendarInfo>({
    firstName: "",
    number: "",
    email: "",
    type: undefined,
    date: dayjs(),
    time: dayjs(),
  });
  const processedDate = useMemo(
    () => (data?.date ? new Date(data.date.toDate()) : undefined),
    [data]
  );
  const { reservationTimes } = useReservationData(processedDate);


  const canSubmitForm = useMemo(() => {
    if (!data.time || !data.type) {
      return false;
    }
    let time = data.time.clone();

    const result = [];

    for (let i = 0; i < timeByType[data.type]; i++) {
      time = time.add(30, "minute");
      result.push(time.format("HH:mm"));
    }
return !result.some((item)=>reservationTimes.includes(item))

   
  }, [data, reservationTimes]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = dayjs(data.date).format("YYYY-MM-DD");
    const time = dayjs(data.time).format("HH:mm");

    const saveData = {
      title: data.firstName,
      description: `${data.email} ${data.number}`,
      date,
      time,
      type: data.type,
    };

    axios.post("http://localhost:8000/data", saveData).then(() => refresh && refresh());
  };

  return (
    <Grid container justifyContent="center" className={styles.scroll}>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <Grid item xs={12} md={12} p={2}>
          <CalendarDatePicker 
            reservationTimes={reservationTimes}
            titleDate="Odaberi datum:"
              
            valueDate={data.date}
            valueTime={data.time}
            setValueDate={(value) => setData({ ...data, date: value })}
            setValueTime={(value) => setData({ ...data, time: value })}
            
          />
        </Grid>
        <Grid item xs={12} md={12} p={2}>
          <MuiInput
            type="text"
            title="Ime i prezime"
            value={data.firstName}
            setValue={(value) => setData({ ...data, firstName: value })}
          />{" "}
        </Grid>{" "}
        <Grid item xs={12} md={12} p={2}>
          <MuiInput
            type="text"
            title="Email"
            value={data.email}
            setValue={(value) => setData({ ...data, email: value })}
          />{" "}
        </Grid>
        <Grid item xs={12} md={12} p={2}>
          <MuiInput
            type="number"
            title="Broj telefona"
            value={data.number}
            setValue={(value) => setData({ ...data, number: value })}
          />{" "}
        </Grid>
        <Grid item xs={12} md={12} p={2}>
          <SelectInput
            title={"Vrsta šminkanja"}
            options={{
              "1": "dnevni makeup (trajanje: 1 sat)",
              "2": "večernji makeup (trajanje: 2 sata)",
              "3": "vjenčani makeup (trajanje: 2 ipo sata + besplatni probni termin po dogovoru",
            }}
            setValue={(value) => setData({ ...data, type: value as "1"| "2"|"3"|undefined})}
            chosenValue={data.type}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container justifyContent={"center"}>
            <Button disabled={!canSubmitForm} className="sendMuiButton" type="submit">
              {translate("send")}
            </Button>
          </Grid>{" "}
        </Grid>
      </form>
    </Grid>
  );
}

export default CalendarForm;
