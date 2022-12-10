import React from "react";
import {
  BtnComplte,
  BtnRemove,
  TodoItemStyled,
} from "../TodoList/styled/TodoItemStyled";
import { ITodoItemComponent } from "../todoTypes/todo.types";

const TodoItem: React.FC<ITodoItemComponent> = ({
  removeTodoItem,
  item,
  completedTodoItem,
}) => {
  const { id, action, completed } = item;

  return (
    <TodoItemStyled completed={completed}>
      <BtnRemove onClick={() => removeTodoItem(id)}>&#10006;</BtnRemove>
      <div>{action}</div>
      <BtnComplte onClick={() => completedTodoItem(id)}>
        {completed ? "✔" : `❑`}
      </BtnComplte>
    </TodoItemStyled>
  );
};

export default TodoItem;
