import "./App.css";
import { CreateTodo } from "./CreateTodo";
import { TodoList } from "./TodoList";
import { useTodos } from "./useTodos";

function App() {
  const { todos, updateTodo, deleteTodo, createTodo } = useTodos();
  return (
    <div className="h-[100vh] overflow-hidden w-1/2 m-auto p-8">
      <div className="flex flex-col gap-4 h-[90vh] overflow-hidden ">
        <CreateTodo createTodo={createTodo} />
        <TodoList
          todos={todos}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}

export default App;
