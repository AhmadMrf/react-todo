import React from "react";
import styles from "./inputTag.module.css";

const InputTag = (props) => {
  return (
    <div className={`${styles["input-container"]} ${props.className || ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type={props.type} name="newTodo" id={props.id} />
    </div>
  );
};
export default InputTag;
