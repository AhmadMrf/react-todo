import React from "react";
import styles from "./inputTag.module.css";

const InputTag = (props) => {
  return (
    <div className={`${styles["input-container"]} ${props.className || ""}`}>
      {props.errorMsg && <p className={styles["error-msg"]}>{props.errorMsg}</p>}
      <input
        onChange={(e) => props.onChangeHandler(e.target.value)}
        type={props.type}
        name="newTodo"
        id={props.id}
        value={props.value}
        className={props.error ? styles["input-error"] : ""}
        autoFocus={true}
        required={props.required}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
};
export default InputTag;
