import { useCallback, useMemo, useState } from "react";
import AddTodoItem from "../AddTodoItem/AddTodoItem";
import TodoItem from "../TodoItem/TodoItem";
import { TTodoItem } from "../todoTypes/todo.types";

const TodoList = () => {
  const todoArray = useMemo(
    () => [
      {
        id: 1,
        action: "Drink coffee",
        completed: false,
      },
      {
        id: 2,
        action: "Do homework",
        completed: true,
      },
      {
        id: 3,
        action: "English time",
        completed: false,
      },
    ],
    []
  );

  const [todo, setTodo] = useState<TTodoItem[]>(todoArray);
  const [toggleAdd, setToggleAdd] = useState<boolean>(false);

  const removeTodoItem = useCallback(
    (id: number) => {
      setTodo((prev) => prev.filter((item) => item.id !== id));
    },
    [setTodo]
  );

  const completedTodoItem = useCallback(
    (id: number) => {
      setTodo((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return { ...item, completed: !item.completed };
          }

          return item;
        })
      );
    },
    [setTodo]
  );

  return (
    <div>
      <button onClick={() => setToggleAdd((prev) => !prev)}>
        {toggleAdd ? "Close block" : "Add new item"}
      </button>
      {toggleAdd && (
        <AddTodoItem
          setToggleAdd={setToggleAdd}
          todo={todo}
          setTodo={setTodo}
        />
      )}
      {todo &&
        todo.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              completedTodoItem={completedTodoItem}
              removeTodoItem={removeTodoItem}
            />
          );
        })}
    </div>
  );
};

export default TodoList;
