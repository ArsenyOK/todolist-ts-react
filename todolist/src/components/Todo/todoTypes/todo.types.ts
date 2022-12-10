export type TTodoItem = {
  id: number;
  action: string;
  completed: boolean;
};

export interface ITodoItemComponent {
  removeTodoItem: (id: number) => void;
  item: TTodoItem;
  completedTodoItem: (id: number) => void;
}

export interface IAddTodoItem {
  todo: TTodoItem[];
  setTodo: (arg: any) => void;
  setToggleAdd: (arg: boolean) => void;
}
