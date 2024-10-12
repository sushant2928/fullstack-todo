import { useEffect } from "react";

export const TodoList = ({ todos, updateTodo, deleteTodo }) => {
  const handleChange = (event, id) => {
    updateTodo(id, { completed: Boolean(event.target.checked) });
  };
  return (
    <div className="w-full flex flex-col gap-2 overflow-scroll">
      {Array.isArray(todos) &&
        todos?.map((todo) => {
          return (
            <div
              key={todo?._id}
              className="flex gap-2 w-full border border-black rounded p-2 items-center"
            >
              <input
                type="checkbox"
                checked={todo?.completed}
                onChange={(event) => handleChange(event, todo?._id)}
              />
              <div className="flex-1">
                <h3 className="font-medium">{todo?.title}</h3>
                <p className="font-light">{todo?.description}</p>
              </div>
              <button
                className="border border-black rounded h-min p-1 bg-black text-white"
                onClick={() => deleteTodo(todo?._id)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};
