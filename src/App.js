import Container from "./components/ui/Container";
import GetInfo from "./components/get-info/GetInfo";
import TodosWrapper from "./components/todos/TodosWrapper";
import AddTodo from "./components/add-todos/AddTodo";
function App() {
  return (
    <Container>
      {/* <AddTodo /> */}
      {/* <TodosWrapper /> */}
      <GetInfo />
    </Container>
  );
}
export default App;
