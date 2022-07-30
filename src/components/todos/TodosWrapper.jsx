import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import HeaderApp from "../ui/HeaderApp";
import TodosList from "./TodosList";
import { IconContext } from "react-icons";
import { FiEdit, FiExternalLink } from "react-icons/fi";
import authContext from "../../context/authContext";

const TodosWrapper = () => {
  const {
    userData: { userName, color },
    onLogedOut
  } = useContext(authContext);
  const [todos, setTodos] = useState({});
  const todosData = [
    {
      id: 1,
      title: "first todo title",
      content: "this is my first todo",
      modifyDate: "2022-07-20 08:23",
      completed: false,
      color: "#cd12ab"
    },
    {
      id: 2,
      title: "second todo",
      content:
        "this another todo that has multiple jjjg fffjgjg jjkkjkj oioioiio ttyttyty rtrtrtrt yuyuyuio jh ghghhf vf gkjkmhj hhjhj shhzlines",
      modifyDate: "2022-06-20 12:01",
      completed: false,
      color: "#5a45cc"
    },
    {
      id: 3,
      title: "third title",
      content: "lorem lkjds sjdflsjdf sfshef fskfse skfjwe sjfeof d",
      modifyDate: "2022-07-10 14:45",
      completed: true,
      color: "#cd12ab"
    }
  ];
  const editUserData = () => {
    const Alert = withReactContent(Swal);

    Alert.fire({
      position: "center",
      titleText: "Edit , Add Later",
      padding: "1rem",
      width: "auto",
      icon: "info",
      timer: 2500,
      showConfirmButton: false,
      iconColor: color
    });
  };
  const editIconStyles = {
    style: { verticalAlign: "middle", marginLeft: ".5rem", cursor: "pointer" }
  };
  return (
    <section>
      <HeaderApp style={{ "--main-color": color }} className="font">
        Hi , {userName}
        <IconContext.Provider value={editIconStyles}>
          <FiEdit title="Edit Data" onClick={editUserData} />
          <FiExternalLink title="Exit" onClick={() => onLogedOut(false)} />
        </IconContext.Provider>
      </HeaderApp>
      <TodosList todos={todosData} />
    </section>
  );
};

export default TodosWrapper;
