import React, { useState } from "react"
import styles from "./FormInput.module.css";
import DatePicker from "./DatePicker";
import { Grid } from "@mui/material";
import MuiInput from "./MuiInput";



function MuiFormInput
() {
  const [data, setData] = useState({
    firstName: "",
    number: "",
    email: "",
    description: "",
    date: new Date(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <Grid item xs={12} md={12} p={5}>
          <Grid container>
            <div className={styles.container}>
              <MuiInput
                type="text"
                title="Ime i prezime"
                value={data.firstName}
                setValue={(value) => setData({ ...data, firstName: value })}
              />{" "}
              <MuiInput
                type="text"
                title="Email"
                value={data.email}
                setValue={(value) => setData({ ...data, email: value })}
              />{" "}
              <MuiInput
                type="text"
                title="Poruka"
                value={data.description}
                setValue={(value) => setData({ ...data, description: value })}
              />
              <DatePicker
                title="Željeni termin usluge"
                value={data.date}
                setValue={(value) => {
                  setData({ ...data, date: value });
                }}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container justifyContent={"center"}>
            <button onClick={(e) => handleSubmit(e)} className={styles.button}>POŠALJI</button>
          </Grid>{" "}
        </Grid>
      </form>
    </Grid>
  );
}

export default MuiFormInput
;
