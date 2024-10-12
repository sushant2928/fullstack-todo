import { useState } from "react";

export const CreateTodo = ({ createTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const handleTitleChange = (event) => {
    setTodoTitle(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setTodoDescription(event.target.value);
  };
  const handleAdd = () => {
    createTodo(todoTitle, todoDescription);
  };
  return (
    <div className="flex flex-col gap-4">
      <input
        className="border p-2 border-black rounded"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <textarea
        className="border p-2 border-black rounded min-h-32 max-h-32"
        value={todoDescription}
        onChange={handleDescriptionChange}
        placeholder="Description"
      />
      <button
        className="border p-2 border-black rounded bg-black text-white"
        onClick={handleAdd}
      >
        ADD
      </button>
    </div>
  );
};
