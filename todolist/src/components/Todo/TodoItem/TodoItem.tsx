import React from "react";
import { ITodoItemComponent } from "../todoTypes/todo.types";

const TodoItem: React.FC<ITodoItemComponent> = ({
  removeTodoItem,
  item,
  completedTodoItem,
}) => {
  const { id, action, completed } = item;

  return (
    <div>
      <button onClick={() => removeTodoItem(id)}>remove</button>
      {action}
      <button onClick={() => completedTodoItem(id)}>
        {completed ? "Completed" : "Uncompleted"}
      </button>
    </div>
  );
};

export default TodoItem;
