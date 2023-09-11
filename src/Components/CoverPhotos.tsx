import React from "react";
import styles from "./CoverPhotos.module.css";

import Grid from "@mui/material/Unstable_Grid2";

function CoverPhotos() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid md={4} xs={12}>
        <img src="tools.png" className={styles.img} />
      </Grid>
      <Grid md={4} xs={12}>
        <img src="tools.png" className={styles.img} />
      </Grid>
      <Grid md={4} xs={12}>
        <img src="tools.png" className={styles.img} />
      </Grid>
    </Grid>
  );
}

export default CoverPhotos;
