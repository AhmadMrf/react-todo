import React from "react";
import Todo from "./Todo";
import styles from "./todolist.module.css";
const TodosList = (props) => {
  return (
    <ul className={styles.todoslist}>
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodosList;
