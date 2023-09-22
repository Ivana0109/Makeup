import { Grid } from "@mui/material";
import React from "react";
import { CiMobile3, CiMail, CiMapPin } from "react-icons/ci";
import styles from "./FooterInfo.module.css";
function FooterInfo() {
  return (
    <Grid container gap={10} className={styles.container}>
      <div className={styles.form}>
        <div className={styles.icons}>
          <CiMapPin style={{ color: "#43b1a8" }} size={30} />
          <div> Vukovarska 139, 2100 Split</div>
        </div>

        <div className={styles.icons}>
          <CiMobile3 style={{ color: "#43b1a8",  }} size={26} />{" "}
          <div>095 7260 480</div>
        </div>
        <div className={styles.icons}>
          <CiMail style={{ color: "#43b1a8" }} size={26} />
          <div> babicivana0109@gmail.com</div>
        </div>
      </div>
      <div  >
        <h2 className={styles.timeText1}>Radno vrijeme</h2> <h3 className={styles.timeText}>Svakim danom prema dogovorenim terminima</h3>
      </div>
    </Grid>
  );
}

export default FooterInfo;
