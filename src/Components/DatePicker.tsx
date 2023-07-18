import * as React from "react";
import DatePickerComponent from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePicker.module.css";


type Props={
  setValue:(value:Date | null)=>void,
  value:Date | null,
  title:string
}
export default function DatePicker({ setValue, title, value }:Props) {
  return (
    <>
      <label>{title}:</label>
      <DatePickerComponent
        className={styles.datePicker}
        selected={value}
        onChange={(date) => setValue(date)}
      />
    </>
  );
}
