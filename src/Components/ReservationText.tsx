import React from "react";
import styles from "./Reservationtext.module.css";
import useTranslation from "../utils/useTranslate";
function ReservationText() {
const translate=useTranslation()

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.h2}>
        {translate("evening")}<br></br>   {translate("daily")}, <br></br>   {translate("wedding")}
        </div>
      </div>
    </div>
  );
}

export default ReservationText;
