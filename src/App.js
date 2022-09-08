import { useState, useEffect } from "react";
import Container from "./components/ui/Container";
import GetInfo from "./components/get-info/GetInfo";
import TodosWrapper from "./components/todos/TodosWrapper";
import authContext from "./context/auth-context";

function App() {
  const userDataHelper = {
    id: "",
    userInfo: {
      userName: "",
      color: "",
    },
    userTodo: [],
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(userDataHelper);

  let ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const logInHandle = (logState, currentUser) => {
    setIsLoggedIn(logState);
    setUserData(currentUser);
  };
  const logOutHandle = (logState) => {
    setIsLoggedIn(logState);
  };
  const editUserHandler = (currentUser) => {
    const updatedUsers = users.map((user) => {
      if (user.id === currentUser.id) return currentUser;
      return user;
    });
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUserData(currentUser);
  };

  useEffect(() => {
    if (ActiveUser) {
      let existedUser = users.find((user) => ActiveUser.userName.toLowerCase() === user.userInfo.userName.toLowerCase());
      editUserHandler(existedUser);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <authContext.Provider
      value={{
        isLoggedIn,
        userData,
        onlogedIn: logInHandle,
        onLogedOut: logOutHandle,
        onEditUser: editUserHandler,
      }}>
      <Container>{isLoggedIn ? <TodosWrapper /> : <GetInfo users={users} />}</Container>
    </authContext.Provider>
  );
}
export default App;
