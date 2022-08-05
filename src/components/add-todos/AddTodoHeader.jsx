import React from "react";
import ColorTag from "../ui/ColorTag";
import styles from "./addTodoHeader.module.css";
const addTodoHeader = (props) => {
  const ChangeHandler = (todoColor) => {
    props.onGetTodoColor(todoColor);
  };
  return (
    <div className={styles["add-todo-header-contaner"]}>
      <h3>add new todo</h3>
      <ColorTag onChangeHandler={ChangeHandler} className={styles["add-todo-header-color"]} id="todoColor" value="#3b9ade" label="todo color" />
    </div>
  );
};

export default addTodoHeader;
