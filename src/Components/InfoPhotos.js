import React from "react";
import styles from "./InfoPhotos.module.css";
import { Grid } from "@mui/material";
function InfoPhotos() {
  return (
    <Grid sx={{ flexGrow: 1 }} container justifyContent="center" spacing={2} p={2}>
    <Grid item md={4} sx={12}><Grid container justifyContent="center" alignItems="center" >
      <img src="tools.png" className={styles.img}/>
      
</Grid></Grid><Grid item md={4} sx={12}><Grid container justifyContent="center" alignItems="center" >
      <img src="tools.png" className={styles.img}/>
      
</Grid></Grid><Grid item md={4} sx={12} ><Grid container justifyContent="center" alignItems="center" >
      <img src="tools.png"className={styles.img}/>
      
</Grid></Grid></Grid>
  );
}

export default InfoPhotos;
