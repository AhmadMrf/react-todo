import React from "react";
import TodoDate from "./TodoDate";
import styles from "./todo.module.css";
const Todo = ({ todo }) => {
  return (
    <li
      style={{ "--todo-color": todo.color }}
      className={styles["todo-wrapper"]}
    >
      <div className={styles["todo-header"]}>
        <div className={styles["todo-details"]}>
          <TodoDate date={todo["modifyDate"]} />
          <span className={styles["todo-title"]}>{todo.title}</span>
        </div>
        <button className={styles["todo-more-action"]}></button>
      </div>
      <div className={styles["todo-content"]}>{todo.content}</div>
    </li>
  );
};

export default Todo;
