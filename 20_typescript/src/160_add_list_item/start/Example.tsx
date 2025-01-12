import { useState } from "react";
import TaskList from "./TaskList";


export type Todo = {
    id: number,
    text: string
}
const Example = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {id: 0, text: 'Gym'},
    {id: 1, text: 'Study'},
  ]);
  const [inputText, setInputText] = useState('')
  const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value);
  const addTodoItem = () => {
    setTodos(state => [...state, { id: setTodos.length, text: inputText}]);
    setInputText('');
  }
  return (
    <>
        <input type="text" value={inputText} onChange={changeHandler}/>
        <button onClick={addTodoItem}>Add</button>
        <TaskList todos={todos}/>
    </>
  )
};

export default Example;
