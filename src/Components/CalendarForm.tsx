import React, { useEffect, useState } from "react";
import styles from "./CalendarForm.module.css";

import { Button, Grid } from "@mui/material";

import CalendarDatePicker from "./CalendarDatePicker";

import axios from "axios";
import dayjs from "dayjs";
import MuiInput from "./MuiInput";
import SelectInput from "./SelectInput";
type CalendarInfo = {
  firstName: string;
  number: string;
  email: string;
  type: string;
  date: dayjs.Dayjs | null | undefined;
  time: dayjs.Dayjs | null | undefined;
};

type Props = {
  refresh: () => void;
};
function CalendarForm({ refresh }: Props) {
  const [data, setData] = useState<CalendarInfo>({
    firstName: "",
    number: "",
    email: "",
    type: "",
    date: dayjs(),
    time: dayjs(),
  });
  const [saveData, setSaveData] = useState([]);
  console.log(data);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const date = dayjs(data.date).utc().format().split("T")[0];
    const time = dayjs(data.time).utc().format().split("T")[1];
    const dateTime = `${date}T${time}`;

    const saveData = {
      title: data.firstName,
      description: `${data.email} ${data.number}`,
      start: dateTime,
      end: dayjs(dateTime).add(1, "h"),
    };
    axios.post("http://localhost:8000/data", saveData).then(() => refresh());
  };

  return (
    <Grid container justifyContent="center"  className={styles.scroll} >
      <form  className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <Grid item xs={12} md={12} p={2}>
          <CalendarDatePicker
            titleDate="ODABERI DATUM:"
            titleTime="ODABERI VRIJEME:"
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
            options={[
              "dnevni makeup ( trajanje: 1 sat)",
              "večernji makeup (trajanje: 2 sata)",
              "vjenčani makeup (trajanje: 2 ipo sata + besplatni probni termin po dogovoru",
            ]}
            setValue={(value) => setData({ ...data, type: value })}
            chosenValue={data.type}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container justifyContent={"center"}>
          <Button className="modalMuiButton">POŠALJI</Button>
          </Grid>{" "}
        </Grid>
      </form>
    </Grid>
  );
}

export default CalendarForm;
