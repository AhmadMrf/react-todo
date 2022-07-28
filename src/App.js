import GetInfo from "./components/get-info/GetInfo";
import TodosWrapper from "./components/todos/TodosWrapper";
import AppContainer from "./components/ui/AppContainer";
import AddTodo from "./components/add-todos/AddTodo";
function App() {
  return (
    <AppContainer>
      <AddTodo />
      {/* <TodosWrapper /> */}
      {/* <GetInfo /> */}
    </AppContainer>
  );
}
export default App;
