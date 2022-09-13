import React, { useContext, useState, useEffect } from "react";
import HeaderApp from "../ui/HeaderApp";
import TodosList from "./TodosList";
import { IconContext } from "react-icons";
import { FiEdit, FiExternalLink, FiPlusCircle } from "react-icons/fi";
import authContext from "../../context/auth-context";
import todoFormCtx from "../../context/todo-form-ctx";
import TodoForm from "../add-todos/TodoForm";
import FilterTodo from "../todos/FilterTodo";
import EditUser from "./EditUser";
let filter = {
  completedFilter: "all",
  dateFilter: "",
  isBeforeDate: "before",
  searchText: "",
};
const TodosWrapper = () => {
  const { userData, onEditUser, onLogedOut } = useContext(authContext);
  const { id, userInfo, userTodo } = userData;
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenTodoForm, setIsOpenTodoForm] = useState(false);
  const [doResetFilters, setDoResetFilters] = useState(false);
  const [filters, setFilters] = useState(filter);

  const filterTodos = (filters) => {
    setDoResetFilters(false);
    let copyTodos = [...userTodo];
    let completedFilters = [];
    if (filters.completedFilter === "completed") {
      completedFilters = copyTodos.filter((todo) => todo.completed);
    } else if (filters.completedFilter === "notCompleted") {
      completedFilters = copyTodos.filter((todo) => !todo.completed);
    } else {
      completedFilters = [...userTodo];
    }

    let dateFilter = [];
    if (filters.dateFilter && filters.isBeforeDate === "before") {
      dateFilter = completedFilters.filter((todo) => {
        return new Date(todo.modifyDate).getTime() < new Date(filters.dateFilter).getTime();
      });
    } else if (filters.dateFilter && filters.isBeforeDate === "after") {
      dateFilter = completedFilters.filter((todo) => {
        return new Date(todo.modifyDate).getTime() > new Date(filters.dateFilter).getTime();
      });
    } else {
      dateFilter = [...completedFilters];
    }

    let searchFilter = [];
    if (filters.searchText) {
      searchFilter = dateFilter.filter((todo) => {
        return todo.title.includes(filters.searchText.trim()) || todo.content.includes(filters.searchText.trim());
      });
    } else {
      searchFilter = [...dateFilter];
    }
    setTodos([...searchFilter]);
  };

  useEffect(() => {
    setTodos([...userTodo]);
    filterTodos(filters);
  }, [userTodo]);

  const initialInfo = {
    id: null,
    color: userInfo.color,
    title: null,
    content: null,
    date: null,
    isEdited: false,
  };
  const [todoFormInfo, setTodoFormInfo] = useState(initialInfo);

  const cancelTodoForm = () => {
    setIsOpenTodoForm(false);
    setTodoFormInfo({ ...initialInfo });
  };
  const submitTodoForm = (newTodoData) => {
    let newTodos = {};
    if (todoFormInfo.isEdited) {
      const editedTodos = userTodo.map((todo) => {
        if (newTodoData.id === todo.id) return newTodoData;
        return todo;
      });

      newTodos = {
        id,
        userInfo,
        userTodo: editedTodos,
      };
    } else {
      newTodos = {
        id,
        userInfo,
        userTodo: [...userTodo, newTodoData],
      };
      setDoResetFilters(true);
      setFilters(filter);
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
    const editedTodo = todos.find((todo) => todo.id === todoId);
    const newFormInfo = {
      id: todoId,
      color: editedTodo.color,
      title: editedTodo.title,
      content: editedTodo.content,
      date: editedTodo.modifyDate,
      isEdited: true,
    };
    setTodoFormInfo(newFormInfo);
  };
  const editUserData = () => {
    setIsEditing(true);
  };

  const editIconStyles = {
    style: { verticalAlign: "middle", marginLeft: ".5rem", cursor: "pointer" },
  };

  return (
    <todoFormCtx.Provider
      value={{
        showTodoForm,
        todoFormInfoHandle,
      }}>
      <section style={{ position: "relative" }}>
        <IconContext.Provider value={editIconStyles}>
          <HeaderApp style={{ "--main-color": userInfo.color }} className='font'>
            {isEditing ? (
              <EditUser
                onEditing={() => {
                  setIsEditing(false);
                }}
                prevUser={userInfo.userName}
                prevColor={userInfo.color}
              />
            ) : (
              <>
                Hi , {userInfo.userName}
                <FiEdit title='Edit user' onClick={editUserData} />
                <FiExternalLink title='Exit' onClick={logOutHandler} />
                <FiPlusCircle title='add new todo' onClick={() => showTodoForm(false)} />
              </>
            )}
            <FilterTodo
              resetFilters={doResetFilters}
              onFilter={(filters) => {
                setFilters({ ...filters });
                filterTodos(filters);
              }}
            />
          </HeaderApp>
        </IconContext.Provider>
        <TodosList todos={todos} />
        {isOpenTodoForm && (
          <TodoForm
            onSubmit={submitTodoForm}
            onCancel={cancelTodoForm}
            userColor={userInfo.color}
            todoFormInfo={todoFormInfo}
          />
        )}
      </section>
    </todoFormCtx.Provider>
  );
};

export default TodosWrapper;
