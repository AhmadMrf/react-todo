import React from "react";
import styles from "./headerApp.module.css";
const HeaderApp = (props) => {
  return (
    <div style={props.style} className={`${styles["get-info-title"]} ${styles[props.className] || ""}`}>
      {props.children}
    </div>
  );
};

export default HeaderApp;
