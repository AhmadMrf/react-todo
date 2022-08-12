import React from "react";
import Todo from "./Todo";
import styles from "./todolist.module.css";
const TodosList = (props) => {
  const todos = props.todos.length ? props.todos.map((todo) => <Todo key={todo.id} todo={todo} />) : <p className={styles["no-todo"]}>no todos to show</p>;
  return <ul className={styles.todoslist}>{todos}</ul>;
};

export default TodosList;
