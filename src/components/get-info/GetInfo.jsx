import React from "react";
// import styles from "../../styles/get-info/get-info.module.css"
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import styles from "./getInfo.module.css";
import CommonStyles from "../ui/commonUi.module.css";

const GetInfo = () => {
  return (
    <section className={styles["get-info-wrapper"]}>
      <HeaderApp>welcome to todo App</HeaderApp>
      <div className={styles["get-info-inputs"]}>
        <InputTag type="text" id="newUser" label="user name" />
        <div className={CommonStyles["get-color"]}>
          <label htmlFor="userColor"> choose your favorit color</label>
          <input value="#3b9ade" type="color" id="userColor" />
        </div>
      </div>
      <button className={CommonStyles.button}>enter</button>
    </section>
  );
};

export default GetInfo;
