import { useState, useEffect } from "react";
import Container from "./components/ui/Container";
import GetInfo from "./components/get-info/GetInfo";
import TodosWrapper from "./components/todos/TodosWrapper";
import authContext from "./context/authContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ userName: "", color: "#29f5fb" });

  const logInHandle = (logState) => {
    setIsLoggedIn(logState);
  };
  const logOutHandle = (logState) => {
    setIsLoggedIn(logState);
  };
  const editUserHandler = ({ userName, color }) => {
    setUserData({ userName, color });
  };
  let ActiveUser = JSON.parse(localStorage.getItem("ActiveUser"));
  const users = JSON.parse(localStorage.getItem("users")) || [];

  useEffect(() => {
    if (ActiveUser) {
      let existedUser = users.find(
        (user) =>
          ActiveUser.userName.toLowerCase() ===
          user.userData.userName.toLowerCase()
      );
      editUserHandler(existedUser.userData);
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
        onEditUser: editUserHandler
      }}
    >
      <Container>
        {isLoggedIn ? (
          <TodosWrapper userInfo={userData} />
        ) : (
          <GetInfo users={users} />
        )}
      </Container>
    </authContext.Provider>
  );
}
export default App;
