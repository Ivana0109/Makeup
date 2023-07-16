import React, { useState } from "react";
import Input from "./Input";

import styles from "./FormInput.module.css";

import DatePicker from "./DatePicker";
import { Grid } from "@mui/material";

function FormInput() {
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
    
    <Grid container justifyContent="center" spacing={2} >
      <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
        <Grid item xs={12} md={12} p={5} >
          <Grid container >
            <div className={styles.container}>
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
              <Input
                type="text"
                title="Poruka"
                value={data.description}
                setValue={(value) => setData({ ...data, description: value })}
              />
              <DatePicker
                title="Željeni termin usluge"
                value={data.date}
                setValue={(value) => setData({ ...data, date: value })}
              />
            </div>
            </Grid>
        </Grid><Grid item xs={12} md={12} >
          <Grid container justifyContent={"center"}>
              <button className={styles.button}>POŠALJI</button>
              </Grid> </Grid>
         
      </form>
    </Grid>
  );
}

export default FormInput;
