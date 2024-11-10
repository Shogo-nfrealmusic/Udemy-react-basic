import { useState } from "react";

const Form = ({ createTodo }) => {
    const [enteredTodo, setEnteredTodo] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
                id: Math.floor(Math.random * 1e5),
                content: enteredTodo,
        }
        createTodo(newTodo);
        setEnteredTodo("");
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <div>
                    <input type="text" value={enteredTodo} onChange={(e) => setEnteredTodo(e.target.value)}/>
                    <button>Add</button>
                </div>
            </form>
        </>
    );
}

export default Form;