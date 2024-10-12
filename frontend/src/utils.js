import axios from "axios";

export const fetchTodosAPI = async () => {
  const result = await axios.get("http://localhost:8080/todos");
  return result?.data?.todos;
};

export const updateTodoAPI = async (id, payload) => {
  return await axios.put(`http://localhost:8080/todo/${id}`, payload);
};

export const createTodoAPI = async (payload) => {
  return axios.post("http://localhost:8080/todo", payload);
};

export const deleteTodoAPI = async (id) => {
  return axios.delete(`http://localhost:8080/todo/${id}`);
};
