import { useState, useEffect } from "react";
import Container from "./components/ui/Container";
import GetInfo from "./components/get-info/GetInfo";
import TodosWrapper from "./components/todos/TodosWrapper";
import authContext from "./context/authContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let userData = JSON.parse(localStorage.getItem("todo"));

  useEffect(() => {
    if (userData) setIsLoggedIn(true);
  }, []);

  const logInHandle = (logState) => {
    setIsLoggedIn(logState);
  };
  const logOutHandle = (logState) => {
    localStorage.removeItem("todo");
    setIsLoggedIn(logState);
  };
  return (
    <authContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userName: "",
        color: "",
        onlogedIn: logInHandle,
        onLogedOut: logOutHandle
      }}
    >
      <Container>
        {isLoggedIn ? <TodosWrapper userInfo={userData} /> : <GetInfo />}
      </Container>
    </authContext.Provider>
  );
}
export default App;
