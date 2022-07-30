import { useState, useEffect } from "react";
import Container from "./components/ui/Container";
import GetInfo from "./components/get-info/GetInfo";
import TodosWrapper from "./components/todos/TodosWrapper";
import authContext from "./context/authContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ userName: "", color: "#29f5fb" });

  // let userData = JSON.parse(localStorage.getItem("todo"));

  useEffect(() => {
    // if (userData) setIsLoggedIn(true);
  }, []);

  const logInHandle = (logState) => {
    setIsLoggedIn(logState);
  };
  const logOutHandle = (logState) => {
    // localStorage.removeItem("todo");
    setIsLoggedIn(logState);
  };
  const editUserHandler = ({ userName, color }) => {
    // localStorage.removeItem("todo");
    setUserData({ userName, color });
  };
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
        {isLoggedIn ? <TodosWrapper userInfo={userData} /> : <GetInfo />}
      </Container>
    </authContext.Provider>
  );
}
export default App;
