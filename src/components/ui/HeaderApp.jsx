import React from "react";
import styles from "./headerApp.module.css";
const HeaderApp = (props) => {
  return <div className={styles["get-info-title"]}>{props.children}</div>;
};

export default HeaderApp;
