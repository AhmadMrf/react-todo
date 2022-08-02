import React from "react";
import TodoDate from "../todos/TodoDate";
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import AddTodoHeader from "./AddTodoHeader";
import styles from "./addTodo.module.css";
import commonStyles from "../ui/commonUi.module.css";
const AddTodo = (props) => {
  return (
    <section>
      <HeaderApp style={{ "--main-color": props.color }} className="font">
        <AddTodoHeader />
      </HeaderApp>
      <div className={styles["add-todo-wrapper"]}>
        <div className={styles["new-todo-details"]}>
          <TodoDate />
          <InputTag
            className={styles["input"]}
            type="text"
            id="newTodo"
            label="title"
          />
        </div>
        <div className={styles["new-todo-content"]}>
          <label htmlFor="todoContent">content</label>
          <textarea id="todoContent"></textarea>
        </div>
        <div className={styles["new-todo-buttons"]}>
          <button className={commonStyles.button}> add new todo</button>
          <button className={commonStyles.button}> cancel</button>
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
