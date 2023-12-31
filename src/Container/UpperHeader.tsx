import React from "react";
import styles from "./UpperHeader.module.css";
import { CiMobile3, CiMail } from "react-icons/ci";
import { Grid } from "@mui/material";
function UpperHeader() {
  return (
    <div className={styles.container}>
      <div className={styles.alingIcons} >
        
      <div   className={styles.icons} >
        <CiMobile3 style={{ color: "#43b1a8" }} size={23} />{" "}
        <div>095 7260 480</div>
        </div>
        <div    className={styles.icons}>
        <CiMail style={{ color: "#43b1a8" }} size={23} />
        <div> babicivana0109@gmail.com</div>
        </div>
      </div>
    </div>
  );
}

export default UpperHeader;
