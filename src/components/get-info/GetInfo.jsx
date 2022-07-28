import React, { useState } from "react";
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import styles from "./getInfo.module.css";
import CommonStyles from "../ui/commonUi.module.css";
import ColorTag from "../ui/ColorTag";

const GetInfo = () => {
  const [userName, setUserName] = useState("");
  const [isValid, setIsValid] = useState(undefined);

  const ChangeTextInput = (userNameInput) => {
    setUserName(userNameInput);
    if (userName.length < 3 && userName.length > 20) {
      setIsValid(false);
    }
  };
  const ChangeColorInput = (themeColorInput) => {
    // setThemeColor(themeColorInput);
  };
  const clickHandler = (e) => {};

  return (
    <section className={styles["get-info-wrapper"]}>
      <HeaderApp className="font">welcome to todo App</HeaderApp>
      <div className={styles["get-info-inputs"]}>
        <InputTag
          error={isValid}
          onChangeHandler={ChangeTextInput}
          type="text"
          id="newUser"
          label="user name"
          value={userName}
        />
        <ColorTag
          onChangeHandler={ChangeColorInput}
          id="color"
          label="choose your favorit color"
        />
      </div>
      <button onClick={clickHandler} className={CommonStyles.button}>
        enter
      </button>
    </section>
  );
};

export default GetInfo;
