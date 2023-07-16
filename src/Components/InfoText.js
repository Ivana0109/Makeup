import React from "react";
import styles from "./InfoText.module.css";
import { Grid } from "@mui/material";
function InfoText() {
  return (

      <div className={styles.container}>
         <Grid container justifyContent="center" alignItems={"center"}  spacing={2} p={10} >
        
        <Grid item xs={12} md={6} >
            <Grid container justifyContent="center" >
        <div className={styles.box}>
          <div className={styles.h2}>Make-up je oblik umjetnosti, baš kao i slikanje na platnu.</div><br></br>
          <div className={styles.h3}>Individualnim pristupom uzimam u obzir vaš ton kože,<br></br> prigodu i vaše
          osobne želje<br></br> kako bih odredila savršen stil šminkanja za vas.</div>
        </div> </Grid></Grid>
        <Grid item xs={12} md={6} >
            <Grid container justifyContent="center">  <img src="doing.png" className={styles.img}/></Grid></Grid>
        </Grid>
      </div>
 
  );
}

export default InfoText;
