import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import HeaderApp from "../ui/HeaderApp";
import TodosList from "./TodosList";
import { IconContext } from "react-icons";
import { FiEdit, FiExternalLink, FiPlusCircle } from "react-icons/fi";
import authContext from "../../context/authContext";
import AddTodo from "../add-todos/AddTodo";

const TodosWrapper = () => {
  const { userData, onEditUser, onLogedOut } = useContext(authContext);
  const { id, userInfo, userTodo } = userData;
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);
  // const [todos, setTodos] = useState({});
  // useEffect(() => {
  //   const userTodos = localStorage.getItem;
  // }, []);

  const cancelNewTodo = () => {
    setShowAddTodoForm(false);
  };
  const addNewTodo = (newTodoData) => {
    const newTodos = {
      id,
      userInfo,
      userTodo: [...userTodo, newTodoData],
    };
    onEditUser(newTodos);
    setShowAddTodoForm(false);
  };
  const logOutHandler = () => {
    localStorage.removeItem("ActiveUser");
    onLogedOut(false);
  };
  const showNewTodoForm = () => {
    setShowAddTodoForm(true);
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
  return (
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
      {showAddTodoForm && <AddTodo onAddTodo={addNewTodo} onCancel={cancelNewTodo} color={userInfo.color} />}
    </section>
  );
};

export default TodosWrapper;
