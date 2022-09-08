import React, { useState, useContext } from "react";
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import styles from "./getInfo.module.css";
import CommonStyles from "../ui/commonUi.module.css";
import ColorTag from "../ui/ColorTag";
import TodosWrapper from "../todos/TodosWrapper";
import authContext from "../../context/auth-context";

const GetInfo = (props) => {
  const [userInfo, setUserInfo] = useState({ userName: "", color: "#29f5fb" });
  const [isValid, setIsValid] = useState({ isValid: " ", errorMsg: "" });
  const authCtx = useContext(authContext);
  const validation = (userInput) => {
    if (userInput.length < 4 || userInput.length > 20) {
      setIsValid({ isValid: false, errorMsg: "" });
    } else {
      setIsValid({ isValid: true, errorMsg: "" });
      return true;
    }
  };

  const ChangeTextInput = (userNameInput) => {
    validation(userNameInput);
    setUserInfo((prev) => {
      return { ...prev, userName: userNameInput };
    });
  };
  const ChangeColorInput = (themeColorInput) => {
    setUserInfo((prev) => {
      return { ...prev, color: themeColorInput };
    });
  };
  const clickHandler = () => {
    if (validation(userInfo.userName)) {
      let existedUser = props.users.find((user) => userInfo.userName.toLowerCase() === user.userInfo.userName.toLowerCase());
      if (existedUser) {
        authCtx.onlogedIn(true, existedUser);
        localStorage.setItem("ActiveUser", JSON.stringify(existedUser.userInfo));
      } else {
        const newUser = { id: Math.random(), userInfo, userTodo: [] };
        const newUsers = [...props.users, newUser];
        localStorage.setItem("users", JSON.stringify(newUsers));
        authCtx.onlogedIn(true, newUser);
        localStorage.setItem("ActiveUser", JSON.stringify(userInfo));
      }
    } else {
      setIsValid({
        isValid: false,
        errorMsg: "user name must be between 4 and 20",
      });
    }
  };

  return authCtx.isLoggedIn ? (
    <TodosWrapper />
  ) : (
    <section className={styles["get-info-wrapper"]}>
      <HeaderApp className="font">welcome to todo App</HeaderApp>
      <div className={styles["get-info-inputs"]}>
        <InputTag
          error={!isValid.isValid}
          onChangeHandler={ChangeTextInput}
          type="text"
          id="newUser"
          label="user name"
          value={userInfo.userName}
          errorMsg={isValid.errorMsg}
        />
        <ColorTag onChangeHandler={ChangeColorInput} id="color" label="choose your favorit color" />
      </div>
      <button onClick={clickHandler} className={CommonStyles.button}>
        enter
      </button>
    </section>
  );
};

export default GetInfo;
