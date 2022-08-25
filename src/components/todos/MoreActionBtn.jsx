import { useState, useRef, useEffect, useContext } from "react";
import { MdDone, MdOutlineModeEdit, MdOutlineCancel } from "react-icons/md";
import { BsTrash, BsThreeDots } from "react-icons/bs";
import styles from "./MoreActionBtn.module.css";
import authContext from "../../context/authContext";
import todoFormCtx from "../../context/todo-form-ctx";
const MoreActionBtn = ({ todoId, onTodoEditHandler }) => {
  const { onEditUser, userData } = useContext(authContext);
  // console.log(userData);
  const [showMoreAction, setShowMoreAction] = useState(false);
  const moreBtns = useRef(null);
  const { current } = moreBtns;
  useEffect(() => {
    const outSideClickHandler = (e) => {
      if (current && !current.contains(e.target)) {
        setShowMoreAction(false);
      }
    };
    document.addEventListener("click", outSideClickHandler);
    return () => {
      document.removeEventListener("click", outSideClickHandler);
    };
  }, [current]);

  const toggleMoreAcrion = (e) => {
    setShowMoreAction((prev) => !prev);
  };
  const completHandler = () => {
    const newTodosStatus = userData.userTodo.map((todo) => {
      if (todoId === todo.id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    const newUserData = {
      ...userData,
      userTodo: newTodosStatus,
    };
    onEditUser(newUserData);
    setShowMoreAction(false);
  };
  const deleteHandler = () => {
    const newTodos = userData.userTodo.filter((todo) => {
      return todoId !== todo.id;
    });
    const newUserData = {
      ...userData,
      userTodo: newTodos,
    };
    onEditUser(newUserData);
    setShowMoreAction(false);
  };
  const editHandler = () => {
    onTodoEditHandler(todoId)
  };
  return (
    <div ref={moreBtns} className={styles["more-action-wrapper"]}>
      {showMoreAction && (
        <div className={`${styles["more-action"]}`}>
          <button onClick={completHandler} className={styles["completed-btn"]}>
            <MdDone />
          </button>
          <button onClick={deleteHandler} className={styles["delete-btn"]}>
            <BsTrash />
          </button>
          <button onClick={editHandler} className={styles["edit-btn"]}>
            <MdOutlineModeEdit />
          </button>
        </div>
      )}
      {
        <button onClick={toggleMoreAcrion} className={styles["toggle-btn"]}>
          {showMoreAction ? <MdOutlineCancel /> : <BsThreeDots />}
        </button>
      }
    </div>
  );
};

export default MoreActionBtn;
