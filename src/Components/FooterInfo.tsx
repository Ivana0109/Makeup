import { Grid } from "@mui/material";
import React from "react";
import { CiMobile3, CiMail, CiMapPin } from "react-icons/ci";
import styles from "./FooterInfo.module.css";
function FooterInfo() {
  return (
    <Grid container gap={10} >
      <Grid container lg={12} className={styles.form}>
        <div className={styles.icons}>
          <CiMapPin style={{ color: "#43b1a8" }} size={30} />
          <div> Vukovarska 139, 2100 Split</div>
        </div>

        <div className={styles.icons}>
          <CiMobile3 style={{ color: "#43b1a8" }} size={26} />{" "}
          <div>095 7260 480</div>
        </div>
        <div className={styles.icons}>
          <CiMail style={{ color: "#43b1a8" }} size={26} />
          <div> babicivana0109@gmail.com</div>
        </div>
      </Grid>
      <Grid container lg={12} gap={1} >
        <Grid lg={12}>
        <h2 className={styles.timeText1}>Working hours</h2>{" "}</Grid>
        <Grid lg={12}></Grid><h3 className={styles.timeText}>
        EVERY DAY ACCORDING TO THE AGREED DATES
        </h3>
      </Grid>
    </Grid>
  );
}

export default FooterInfo;
