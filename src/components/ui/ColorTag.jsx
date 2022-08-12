import React, { useState } from "react";
import styles from "./colorTag.module.css";

const ColorTag = (props) => {
  const [color, setColor] = useState(props.value);
  const colorInputHandler = (e) => {
    setColor(e.target.value);
    props.onChangeHandler(e.target.value);
  };
  return (
    <div className={`${styles["get-color"]} ${props.className || ""}`}>
      <label style={{ "--color-input": color }} htmlFor={props.id}>
        {props.label}
      </label>
      <input onChange={colorInputHandler} type="color" id={props.id} />
    </div>
  );
};
export default ColorTag;
