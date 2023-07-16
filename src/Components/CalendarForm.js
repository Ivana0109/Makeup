import React, { useEffect, useState } from "react";
import styles from "./CalendarForm.module.css";

import { Grid } from "@mui/material";
import Input from "./Input";
import CalendarDatePicker from "./CalendarDatePicker";
import Select from "./Select";
import axios from "axios";
import dayjs from "dayjs";

function CalendarForm({refresh}) {
  const [data, setData] = useState({
    firstName: "",
    number: "",
    email: "",
    type: "",
    date: "",
    time: "",
  });
  const [saveData, setSaveData] = useState([]);
console.log(data)
  const handleSubmit = (e) => {
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
    axios.post("http://localhost:8000/data", saveData).then(()=>refresh());
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Grid item xs={12} md={12} p={5}>
          <div className={styles.container}>
          <CalendarDatePicker
              titleDate="Odaberi datum"
              titleTime="Odaberi vrijeme"
              valueDate={data.date}
              valueTime={data.time}
              setValueDate={(value) => setData({ ...data, date: value })}
              setValueTime={(value) => setData({ ...data, time: value })}
            />
            
            
            <Input
              type="text"
              title="Ime i prezime"
              value={data.firstName}
              setValue={(value) => setData({ ...data, firstName: value })}
            />{" "}
            <Input
              type="text"
              title="Email"
              value={data.email}
              setValue={(value) => setData({ ...data, email: value })}
            />{" "}
            <Input
              type="number"
              title="Broj telefona"
              value={data.photo}
              setValue={(value) => setData({ ...data, number: value })}
            />{" "}
            <Select
              title={"Vrsta šminkanja"}
              options={[
                "dnevni makeup ( trajanje: 1 sat)",
                "večernji makeup (trajanje: 2 sata)",
                "vjenčani makeup (trajanje: 2 ipo sata + besplatni probni termin po dogovoru",
              ]}
              setValue={(value) => setData({ ...data, type: value })}
              chosenValue={data.type}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container justifyContent={"center"}>
            <button className={styles.button}>POŠALJI</button>
          </Grid>{" "}
        </Grid>
      </form>
    </Grid>
  );
}

export default CalendarForm;
