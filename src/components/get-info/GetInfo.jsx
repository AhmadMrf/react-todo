import React from "react";
// import styles from "../../styles/get-info/get-info.module.css"
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import styles from "./getInfo.module.css";
import CommonStyles from "../ui/commonUi.module.css";
import ColorTag from "../ui/ColorTag";

const GetInfo = () => {
  return (
    <section className={styles["get-info-wrapper"]}>
      <HeaderApp className="font">welcome to todo App</HeaderApp>
      <div className={styles["get-info-inputs"]}>
        <InputTag type="text" id="newUser" label="user name" />
        <ColorTag
          id="color"
          value="#3b9ade"
          label="choose your favorit color"
        />
      </div>
      <button className={CommonStyles.button}>enter</button>
    </section>
  );
};

export default GetInfo;
