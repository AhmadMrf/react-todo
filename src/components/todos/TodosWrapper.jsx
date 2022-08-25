import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import HeaderApp from "../ui/HeaderApp";
import TodosList from "./TodosList";
import { IconContext } from "react-icons";
import { FiEdit, FiExternalLink, FiPlusCircle } from "react-icons/fi";
import authContext from "../../context/authContext";
import todoFormCtx from "../../context/todo-form-ctx";
import TodoForm from "../add-todos/TodoForm";

const TodosWrapper = () => {
  const { userData, onEditUser, onLogedOut } = useContext(authContext);
  const { id, userInfo, userTodo } = userData;
  const [isOpenTodoForm, setIsOpenTodoForm] = useState(false);

  const initialInfo = {
    id: null,
    color: userInfo.color,
    title: null,
    content: null,
    date: null,
    isEdited: false
  };
  const [todoFormInfo, setTodoFormInfo] = useState(initialInfo);

  const cancelTodoForm = () => {
    setIsOpenTodoForm(false);
    setTodoFormInfo({ ...initialInfo });
  };
  const submitTodoForm = (newTodoData) => {
    let newTodos = {};
    if (todoFormInfo.isEdited) {
      console.log(newTodoData);
      const editedTodos = userTodo.map((todo) => {
        if (newTodoData.id === todo.id) return newTodoData;
        return todo;
      });
      console.log(editedTodos);

      newTodos = {
        id,
        userInfo,
        userTodo: editedTodos
      };
    } else {
      newTodos = {
        id,
        userInfo,
        userTodo: [...userTodo, newTodoData]
      };
    }
    onEditUser(newTodos);
    setIsOpenTodoForm(false);
    setTodoFormInfo({ ...initialInfo });
  };
  const logOutHandler = () => {
    localStorage.removeItem("ActiveUser");
    onLogedOut(false);
  };
  const showTodoForm = () => {
    setIsOpenTodoForm(true);
  };

  const todoFormInfoHandle = (todoId) => {
    const editedTodo = userTodo.find((todo) => todo.id === todoId);
    const newFormInfo = {
      id: todoId,
      color: editedTodo.color,
      title: editedTodo.title,
      content: editedTodo.content,
      date: editedTodo.modifyDate,
      isEdited: true
    };
    setTodoFormInfo(newFormInfo);
  };
  const editUserData = () => {
    const Alert = withReactContent(Swal);

    Alert.fire({
      position: "center",
      titleText: "Edit , Will Be Added Later",
      padding: "1rem",
      width: "auto",
      icon: "info",
      timer: 2500,
      showConfirmButton: false,
      iconColor: userInfo.color
    });
  };

  const editIconStyles = {
    style: { verticalAlign: "middle", marginLeft: ".5rem", cursor: "pointer" }
  };

  return (
    <todoFormCtx.Provider
      value={{
        showTodoForm,
        todoFormInfoHandle
      }}
    >
      <section style={{ position: "relative" }}>
        <IconContext.Provider value={editIconStyles}>
          <HeaderApp
            style={{ "--main-color": userInfo.color }}
            className="font"
          >
            Hi , {userInfo.userName}
            <FiEdit title="Edit user" onClick={editUserData} />
            <FiExternalLink title="Exit" onClick={logOutHandler} />
            <FiPlusCircle
              title="add new todo"
              onClick={() => showTodoForm(false)}
            />
          </HeaderApp>
        </IconContext.Provider>
        <TodosList todos={userTodo} />
        {isOpenTodoForm && (
          <TodoForm
            onSubmit={submitTodoForm}
            onCancel={cancelTodoForm}
            todoFormInfo={todoFormInfo}
          />
        )}
      </section>
    </todoFormCtx.Provider>
  );
};

export default TodosWrapper;
