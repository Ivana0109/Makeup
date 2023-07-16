import React, { useState } from "react";
import styles from "./CalendarModal.module.css";
import FormInput from "./FormInput";
import { BsX } from "react-icons/bs";
import ReservationText from "./ReservationText";

import CalendarForm from "./CalendarForm";

export default function Modal({refresh}) {
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
    <div>
      <button onClick={toggleModal} className={styles.btn_modal}>
        odaberi datum
      </button>

      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_container}>
            <div className={styles.modal_content}>
              <button className={styles.close_modal} onClick={toggleModal}>
                <BsX size={40} />
              </button>
              <h2>Upiši podatke:</h2>
              <CalendarForm  refresh={refresh}/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
