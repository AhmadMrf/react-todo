import React from "react";
// import styles from "../../styles/get-info/get-info.module.css"
import HeaderApp from "../ui/HeaderApp";
import styles from "./getInfo.module.css";

const GetInfo = () => {
  console.log(styles);

  return (
    <section className={styles["get-info-wrapper"]}>
      <HeaderApp>welcome to todo App</HeaderApp>
      <div className={styles["get-info-inputs"]}>
        <div className={styles["get-info-input-username"]}>
          <label htmlFor="userName">user name</label>
          <input id="userName" type="text" />
        </div>
        <div className={styles["get-info-input-user-color"]}>
          <label htmlFor="userColor"> choose your favorit color</label>
          <input value="#3b9ade" type="color" id="userColor" />
        </div>
      </div>
      <button>enter</button>
    </section>
  );
};

export default GetInfo;
