import Container from "./components/ui/Container";
import GetInfo from "./components/get-info/GetInfo";
import TodosWrapper from "./components/todos/TodosWrapper";
// import AddTodo from "./components/add-todos/AddTodo";
function App() {
  const userData = JSON.parse(localStorage.getItem("todo"));

  return (
    <Container>
      {userData ? <TodosWrapper userInfo={userData} /> : <GetInfo />}
    </Container>
  );
}
export default App;
