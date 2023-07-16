import React from 'react'
import styles from "./UpMenu.module.css";
import { CiMobile3,CiMail } from "react-icons/ci";
function UpMenu() {
  return (
   
      <div className={styles.container}>
    <div className={styles.icons}><CiMobile3 style={{color:"#43b1a8", }} size={50}/> <div>095 7260 480</div></div>
   <div className={styles.icons}><CiMail style={{color:"#43b1a8", }} size={50}/><div> babicivana0109@gmail.com</div></div>
      </div>
  )
}

export default UpMenu