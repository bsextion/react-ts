import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todo-context';

function App() {

  return (
      <TodosContextProvider id={''} text={''}>
      <NewTodo />
      <Todos/>
      </TodosContextProvider>
  );
}

export default App;
