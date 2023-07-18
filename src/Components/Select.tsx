import * as React from "react";
import styles from "./Select.module.css";
type Props = {
  title: string,
  options: string[],
  setValue: (value: string) => void,
  chosenValue: string,
};

function Select({ title, options, setValue, chosenValue }:Props) {
  return (
    <div className={styles.container}>
      <label>{title}:</label>
      <select value={chosenValue} onChange={(e) => {
                setValue(e.target.value);
              }}>
        {options.map((item) => {
          return (
            <option
              value={item}
              
              
            > 

              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
