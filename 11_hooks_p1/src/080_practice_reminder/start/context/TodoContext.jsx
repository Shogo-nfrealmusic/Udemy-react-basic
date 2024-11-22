import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();
const TodoDispatchContext = createContext();

const todosList = [
  {
    id: 1,
    content: "店予約する",
    edit: false,
  },
  {
    id: 2,
    content: "卵買う",
    edit: false,
  },
  {
    id: 3,
    content: "郵便出す",
    edit: false,
  },
];

const reducer = (todos, action) => {
  switch (action.type) {
    case "todo/add":
      return [...todos, action.todo];
    case "todo/delete":
      return todos.filter((todo) => todo.id !== action.todo.id);
    case "todo/update":
      return todos.map((_todo) => {
        return _todo.id === action.todo.id
          ? { ..._todo, ...action.todo }
          : { ..._todo };
      });
    default:
      return todos;
  }
};

const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, todosList);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

const useTodos = () => useContext(TodoContext);
const useDispatchTodos = () => useContext(TodoDispatchContext);

export { TodoProvider, useTodos, useDispatchTodos };
