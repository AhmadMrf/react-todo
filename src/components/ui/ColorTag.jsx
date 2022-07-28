import React from "react";
import styles from "./colorTag.module.css";

const ColorTag = (props) => {
  return (
    <div className={`${styles["get-color"]} ${props.className || ""}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        onChange={(e) => props.onChangeHandler(e.target.value)}
        defaultValue="#29f5fb"
        type="color"
        id={props.id}
      />
    </div>
  );
};
export default ColorTag;
