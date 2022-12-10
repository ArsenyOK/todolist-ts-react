import React, { useState } from "react";
import { IAddTodoItem, TTodoItem } from "../todoTypes/todo.types";

const AddTodoItem: React.FC<IAddTodoItem> = ({
  setTodo,
  todo,
  setToggleAdd,
}) => {
  const [todoName, setTodoName] = useState<string>("");

  const onChangeTodoName = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setTodoName(e.target.value);
  };

  const addNewTodo = () => {
    if (todoName.length === 0) {
      alert("Fill thiss field pls!");
    } else {
      const newItem = {
        id: todo.length + 1,
        action: todoName,
        completed: false,
      };
      setTodo((prev: any) => [...prev, newItem]);
      setToggleAdd(false);
      setTodoName("");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Fill your todo action"
        onChange={(e) => onChangeTodoName(e)}
        value={todoName}
      />
      <button onClick={() => addNewTodo()}>Add todo</button>
    </>
  );
};

export default AddTodoItem;
