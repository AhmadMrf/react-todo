import React from "react";
import ColorTag from "../ui/ColorTag";
import styles from "./addTodoHeader.module.css";
const addTodoHeader = (props) => {
  const ChangeHandler = (todoColor) => {
    props.onGetTodoColor(todoColor);
  };
  return (
    <div className={styles["add-todo-header-container"]}>
      <h3>{props.title}</h3>
      <ColorTag onChangeHandler={ChangeHandler} className={styles["add-todo-header-color"]} id="todoColor" value="#6d72fd" label="todo color" />
    </div>
  );
};

export default addTodoHeader;
