import React from "react";
import styles from "./todo-date.module.css";
const TodoDate = ({ date }) => {
  if (!date) {
    date = new Date();
  }
  const todoDate = new Date(date);
  const todoDay = todoDate.getDate();
  const todoMonth = todoDate.toLocaleString("en", { month: "short" });
  const hour = todoDate.getHours();
  const minute = todoDate.getMinutes();

  return (
    <div className={styles["todo-date"]}>
      <span>{`${todoDay} ${todoMonth}`}</span>
      <span>{`${hour}:${minute}`}</span>
    </div>
  );
};
export default TodoDate;
