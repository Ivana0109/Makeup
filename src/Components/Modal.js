import React, { useState } from "react";
import styles from "./Modal.module.css";
import FormInput from "./FormInput";
import { BsX } from "react-icons/bs";
import ReservationText from "./ReservationText";
import { Grid } from "@mui/material";
export default function Modal({buttonText}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active_modal");
  } else {
    document.body.classList.remove("active_modal");
  }

  return (
    <Grid sx={{ flexGrow: 1 }} container justifyContent="center" p={10}>
      <Grid item md={12} sx={12}>
        <Grid container justifyContent="center">
          <ReservationText />
        </Grid>
      </Grid>
      <Grid item  md={12} sx={12}>
        <Grid container justifyContent="center">
          <button onClick={toggleModal} className={styles.btn_modal}>
            {buttonText}
          </button>
        </Grid>
      </Grid>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            <h2>Upiši podatke:</h2>
            <FormInput />
            <button className={styles.close_modal} onClick={toggleModal}>
              <BsX size={40} />
            </button>
          </div>
        </div>
      )}
    </Grid>
  );
}
