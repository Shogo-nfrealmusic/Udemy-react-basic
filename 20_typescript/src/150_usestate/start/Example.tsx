import { useState } from "react";

type Todo = {
    id: number,
    text: string
}

const Example = () => {
//   const [text, setText] = useState('hello');
const [todos, setTodos] = useState<Todo[]>([{ id:0, text: 'Homework'}])
};

export default Example;
