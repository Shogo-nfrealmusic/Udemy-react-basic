import { useState } from "react";
import { useDispatchTodos } from "../context/TodoContext";

const Item = ({ todo }) => {
  const [edit, setEdit] = useState(todo.content);
  const dispatch = useDispatchTodos();
  const changeContent = (e) => {
    return setEdit(e.target.value);
  };
  const toggle = () => {
    const newTodo = { ...todo, edit: !todo.edit };
    dispatch({ type: "todo/update", todo: newTodo });
  };
  const confirmContent = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, edit: !todo.edit, content: edit };
    dispatch({ type: "todo/update", todo: newTodo });
  };

  const complete = (todo) => {
    dispatch({ type: "todo/delete", todo });
  };
  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline-block" }}>
        {todo.edit ? (
          <input type="text" value={edit} onChange={changeContent} />
        ) : (
          <span onDoubleClick={toggle}>{todo.content}</span>
        )}
      </form>
    </div>
  );
};
export default Item;
