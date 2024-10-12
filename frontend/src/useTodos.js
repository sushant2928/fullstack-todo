import { useEffect, useState } from "react";
import {
  createTodoAPI,
  deleteTodoAPI,
  fetchTodosAPI,
  updateTodoAPI,
} from "./utils";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const getTodos = async () => {
    const result = await fetchTodosAPI();
    setTodos(result);
  };
  const createTodo = async (todoTitle, todoDescription) => {
    if (todoTitle !== 0 && todoTitle !== false && !todoTitle) {
      alert("Title can't be empty");
      return;
    }
    await createTodoAPI({
      title: todoTitle,
      description: todoDescription,
    });
    getTodos();
  };
  const updateTodo = async (id, payload) => {
    await updateTodoAPI(id, payload);
    getTodos();
  };
  const deleteTodo = async (id) => {
    await deleteTodoAPI(id);
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return {
    createTodo,
    getTodos,
    todos,
    updateTodo,
    deleteTodo,
  };
};
