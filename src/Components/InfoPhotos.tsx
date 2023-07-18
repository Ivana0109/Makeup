import React from "react";
import styles from "./InfoPhotos.module.css";

import Grid from '@mui/material/Unstable_Grid2'


function InfoPhotos() {
 
  return (
  
    <Grid sx={{ flexGrow: 1 }} container justifyContent="center" columnSpacing={2} p={2}>
    <Grid  md={4} xs={12}><Grid container justifyContent="center" alignItems="center" >
      <img src="tools.png" className={styles.img}/>
      
</Grid></Grid><Grid  md={4} xs={12}><Grid container justifyContent="center" alignItems="center" >
      <img src="tools.png" className={styles.img}/>
      
</Grid></Grid><Grid md={4} xs={12} ><Grid container justifyContent="center" alignItems="center" >
      <img src="tools.png"className={styles.img}/>
      
</Grid></Grid></Grid>
  );
}

export default InfoPhotos;
