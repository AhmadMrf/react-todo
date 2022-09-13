import React, { useRef, useState, useContext } from "react";
import TodoDate from "../todos/TodoDate";
import HeaderApp from "../ui/HeaderApp";
import InputTag from "../ui/InputTag";
import AddTodoHeader from "./AddTodoHeader";
import styles from "./TodoForm.module.css";
import commonStyles from "../ui/commonUi.module.css";
import ReactDOM from "react-dom";
import Container from "../ui/Container";
const modal = document.getElementById("modal");
const TodoForm = (props) => {
  console.log(props);
  const newTodoContent = useRef();
  const [todoTitle, setTodoTitle] = useState(props.todoFormInfo.isEdited ? props.todoFormInfo.title : "");
  const [todoColor, setTodoColor] = useState(props.todoFormInfo.isEdited ? props.todoFormInfo.color : props.userColor);
  const [isValid, setIsValid] = useState({ isValid: " ", errorMsg: "" });
  const validation = (userInput) => {
    if (userInput.length < 4 || userInput.length > 20) {
      setIsValid({ isValid: false, errorMsg: "" });
      return false;
    } else {
      setIsValid({ isValid: true, errorMsg: "" });
      return true;
    }
  };

  const confirmTodoData = () => {
    if (!validation(todoTitle)) {
      setIsValid(() => ({
        isValid: false,
        errorMsg: "enter between 4 & 20 charecter",
      }));
      return;
    }
    const newTodoData = {
      id: props.todoFormInfo.isEdited ? props.todoFormInfo.id : Math.random(),
      title: todoTitle,
      content: newTodoContent.current.value,
      modifyDate: props.todoFormInfo.isEdited ? props.todoFormInfo.date : new Date(),
      completed: false,
      color: todoColor,
    };
    props.onSubmit(newTodoData);
  };
  const newTodoTitle = (todoTitleInput) => {
    validation(todoTitleInput);
    setTodoTitle(todoTitleInput);
  };
  const getTodoColor = (todoColor) => {
    setTodoColor(todoColor);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains(styles.container)) props.onCancel();
  };
  let style = { "--main-color": todoColor }
  return (
    <>
      {ReactDOM.createPortal(
        <div onClick={closeModal} className={styles.container}>
          <Container >
            <HeaderApp style={style} className='font'>
              <AddTodoHeader
                title={props.todoFormInfo.isEdited ? "edit todo" : "add new todo"}
                onGetTodoColor={getTodoColor}
                color={todoColor}
              />
            </HeaderApp>
            <div className={styles["add-todo-wrapper"]}>
              <div className={styles["new-todo-details"]}>
                <TodoDate />
                <InputTag
                  error={!isValid.isValid}
                  onChangeHandler={newTodoTitle}
                  value={todoTitle}
                  className={styles["input"]}
                  type='text'
                  id='newTodo'
                  label='title'
                  errorMsg={isValid.errorMsg}
                  autofocus={true}
                />
              </div>
              <div className={styles["new-todo-content"]}>
                <label htmlFor='todoContent'>content</label>
                <textarea
                  id='todoContent'
                  defaultValue={props.todoFormInfo.isEdited ? props.todoFormInfo.content : ""}
                  ref={newTodoContent}></textarea>
              </div>
              <div className={styles["new-todo-buttons"]}>
                <button style={style} onClick={confirmTodoData} className={commonStyles.button}>
                  {props.todoFormInfo.isEdited ? "edit todo" : "add new todo"}
                </button>
                <button style={style} onClick={props.onCancel} className={commonStyles.button}>
                  cancel
                </button>
              </div>
            </div>
          </Container>
        </div>,
        modal
      )}
    </>
  );
};

export default TodoForm;
