import React from 'react'
import styles from "./PhotoPage.module.css";
import PriceButtons from "./PriceButtons";
import { Grid } from '@mui/material';
import MuiModal from './MuiModal';

function PhotoPage() {
  return (
    <div className={styles.container}>
         <Grid sx={{ flexGrow: 1 }} container   >
    <Grid  md={6} xs={12}>
      <Grid container   >
      <PriceButtons/>
    
      </Grid></Grid>

      <Grid  md={6} xs={12}>
      <Grid container  >
        <MuiModal />
        </Grid></Grid></Grid>
    </div>
    
  )
}

export default PhotoPage