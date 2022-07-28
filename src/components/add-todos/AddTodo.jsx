import React from "react";
import TodoDate from "../todos/TodoDate";
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import AddHeader from "./AddHeader";
import styles from "./addTodo.module.css";
import commonStyles from "../ui/commonUi.module.css";
const AddTodo = () => {
  return (
    <section>
      <HeaderApp>
        <AddHeader />
      </HeaderApp>
      <div className={styles["add-todo-wrapper"]}>
        <div className={styles["new-todo-details"]}>
          <TodoDate />
          <InputTag className="input" type="text" id="newTodo" label="title" />
        </div>
        <div className={styles["new-todo-content"]}>
          <label htmlFor="todoContent">todo body</label>
          <textarea id="todoContent"></textarea>
        </div>
        <button className={commonStyles.button}> add new todo</button>
      </div>
    </section>
  );
};

export default AddTodo;
