import React, { useContext, useEffect, useState } from "react";
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
  // const [showEditTodoForm, setShowEditTodoForm] = useState(false);
  // const [todos, setTodos] = useState({});
  // useEffect(() => {
  //   const userTodos = localStorage.getItem;
  // }, []);

  const cancelTodoForm = () => {
    setIsOpenTodoForm(false);
    // setShowEditTodoForm(false);
  };
  const submitTodoForm = (newTodoData) => {
    const newTodos = {
      id,
      userInfo,
      userTodo: [...userTodo, newTodoData],
    };
    onEditUser(newTodos);
    setIsOpenTodoForm(false);
  };
  const logOutHandler = () => {
    localStorage.removeItem("ActiveUser");
    onLogedOut(false);
  };
  const showNewTodoForm = () => {
    setIsOpenTodoForm(true);
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
      iconColor: userInfo.color,
    });
  };

  const editIconStyles = {
    style: { verticalAlign: "middle", marginLeft: ".5rem", cursor: "pointer" },
  };

  // const initialValue = {
  //   isOpen: isOpenTodoForm,
  //   initialInfo: {
  //     color:null,
  //     title:null,
  //     content:null,
  //     date:null,
  //     confirmText:null,
  //   },
  //   onCancel: cancelTodoForm,
  //   onSubmit: submitTodoForm,
  // }

  // const initialInfo = {
  //   color: userInfo.color,
  //   title: null,
  //   content: null,
  //   date: null,
  //   isEdited: false,
  // };

  const initialInfo = {
    color: "#cdcdcd",
    title: "no tile",
    content: "no content",
    date: "2021-10-10",
    isEdited: true,
  };
  return (
    <todoFormCtx.Provider
      value={{
        isOpen: isOpenTodoForm,
        initialInfo,
      }}>
      <section style={{ position: "relative" }}>
        <IconContext.Provider value={editIconStyles}>
          <HeaderApp style={{ "--main-color": userInfo.color }} className="font">
            Hi , {userInfo.userName}
            <FiEdit title="Edit user" onClick={editUserData} />
            <FiExternalLink title="Exit" onClick={logOutHandler} />
            <FiPlusCircle title="add new todo" onClick={showNewTodoForm} />
          </HeaderApp>
        </IconContext.Provider>
        <TodosList todos={userTodo} />
        {/* {isOpenTodoForm && <TodoForm info={initialInfo} />} */}
        {isOpenTodoForm && <TodoForm onSubmit={submitTodoForm} onCancel={cancelTodoForm} initialInfo={initialInfo} />}
      </section>
    </todoFormCtx.Provider>
  );
};

export default TodosWrapper;
