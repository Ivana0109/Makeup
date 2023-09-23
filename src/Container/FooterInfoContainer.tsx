import React from "react";
import styles from "./FooterInfoContainer.module.css";
import { Grid } from "@mui/material";
import FooterInfo from "../Components/FooterInfo";

function FooterInfoContainer() {
  return (
    <div className={styles.box}>
      <Grid container justifyContent="center" p={4}>
        <Grid container  justifyContent="flex-start" alignItems={"center"}  xs={12} md={6} p={2} >
          <FooterInfo />
        </Grid>
        <Grid container alignItems={"center"} xs={12} md={6} p={2}>
          <iframe
            className={styles.container}
            title="Vukovarska 139"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2893.440055324808!2d16.4696386!3d43.5140154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13355e3c0ca440f1%3A0x3b27a4cbdcec96f3!2sVukovarska%20ul.%20139%2C%2021000%2C%20Split!5e0!3m2!1sen!2shr!4v1688375941431!5m2!1sen!2shr"
            width="300"
            height="250"
            loading="lazy"
          ></iframe>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterInfoContainer;
