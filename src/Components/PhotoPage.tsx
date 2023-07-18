import React from 'react'
import styles from "./PhotoPage.module.css";
import PriceTable from "./PriceTable";
import { Grid } from '@mui/material';
import Modal from './Modal';
function PhotoPage() {
  return (
    <div className={styles.container}>
         <Grid sx={{ flexGrow: 1 }} container   >
    <Grid  md={6} xs={12}>
      <Grid container   >
      <PriceTable/>
    
      </Grid></Grid>

      <Grid  md={6} xs={12}>
      <Grid container  >
        <Modal buttonText={"REZERVIRAJ TERMIN"}/>
        </Grid></Grid></Grid>
    </div>
    
  )
}

export default PhotoPage