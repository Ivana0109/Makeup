import React from "react";
import styles from "./CoverText.module.css";
import { Grid } from "@mui/material";
function CoverText() {
  return (
    <div className={styles.container}>
      <Grid
        container
        justifyContent="center"
        alignItems={"center"}
        spacing={2}
        p={10}
      >
        <Grid item xs={12} md={6}>
          <Grid container justifyContent="center" alignItems="center" className={styles.h3}>
           Individualnim pristupom uzimam u obzir vaš ton kože,
              kako bih odredila savršen stil
             kako bih odredila savršen stil
                šminkanja za vas.
            
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container justifyContent="center">
            {" "}
            <img src="doing.png" className={styles.img} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default CoverText;
