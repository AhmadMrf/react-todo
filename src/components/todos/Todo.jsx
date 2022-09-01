import React from "react";
import TodoDate from "./TodoDate";
import styles from "./todo.module.css";
import MoreActionBtn from "./MoreActionBtn";
const Todo = ({ todo }) => {
  let todoWrapperStyle = todo.completed ? `${styles["todo-wrapper"]} ${styles["completed"]}` : `${styles["todo-wrapper"]} `;
  // console.log(styles['todo-title']);

  return (
    <li style={{ "--todo-color": todo.color }} className={todoWrapperStyle}>
      <div className={styles["todo-header"]}>
        <div className={styles["todo-details"]}>
          <TodoDate date={todo["modifyDate"]} />
          <span className={styles["todo-title"]}>{todo.title}</span>
        </div>
        <MoreActionBtn isCompleted={todo.completed} todoId={todo.id} />
        {/* <button className={styles["todo-more-action"]}></button> */}
      </div>
      <div className={styles["todo-content"]}>{todo.content}</div>
    </li>
  );
};

export default Todo;
