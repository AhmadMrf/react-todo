import React, { useRef, useState } from "react";
import TodoDate from "../todos/TodoDate";
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import AddTodoHeader from "./AddTodoHeader";
import styles from "./addTodo.module.css";
import commonStyles from "../ui/commonUi.module.css";

const AddTodo = (props) => {
  const newTodoContent = useRef();
  const [todoTitle, setTodoTitle] = useState("");
  const [isValid, setIsValid] = useState({ isValid: " ", errorMsg: "" });
  const validation = (userInput) => {
    if (userInput.length < 4 || userInput.length > 20) {
      setIsValid({ isValid: false, errorMsg: "" });
    } else {
      setIsValid({ isValid: true, errorMsg: "" });
      return true;
    }
  };

  const newTodoTitle = (todoTitleInput) => {
    validation(todoTitleInput);
    setTodoTitle(todoTitleInput);
  };
  const getTodoColor = (todoColor) => {
    console.log(todoColor);
  };
  const addNewTodo = () => {};
  const cancelAddTodo = () => {};
  return (
    <section
      className={styles.container}
      style={{ "--main-color": props.color }}
    >
      <HeaderApp className="font">
        <AddTodoHeader onGetTodoColor={getTodoColor} />
      </HeaderApp>
      <div className={styles["add-todo-wrapper"]}>
        <div className={styles["new-todo-details"]}>
          <TodoDate />
          <InputTag
            error={!isValid.isValid}
            onChangeHandler={newTodoTitle}
            value={todoTitle}
            className={styles["input"]}
            type="text"
            id="newTodo"
            label="title"
          />
        </div>
        <div className={styles["new-todo-content"]}>
          <label htmlFor="todoContent">content</label>
          <textarea id="todoContent" ref={newTodoContent}></textarea>
        </div>
        <div className={styles["new-todo-buttons"]}>
          <button onClick={addNewTodo} className={commonStyles.button}>
            add new todo
          </button>
          <button onClick={props.onCancel} className={commonStyles.button}>
            cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddTodo;
