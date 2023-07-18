import React from "react";
import styles from "./Input.module.css";

type Props={
  title:String,
  value:string | number
  setValue: (value: string ) => void
  type:string,
  
}
function Input({ setValue, title, type, value }:Props) {
  
  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.content}>
        <label>{title}: </label>
        <input
          required
          className={styles.input}
          type={type}
          placeholder={type === "text" ? undefined : "Please enter amount"}
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />{" "}
      </div>
     
    </div>
  );
}

export default Input;
