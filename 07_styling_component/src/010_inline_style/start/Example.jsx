import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style = {
        width: 120,
        height: 60,
        fontWeight: "bold",
        borderRadius: "50%",
        cursor: "pointer",
        border: "none",
        margin : "auto",
        background: isSelected ? "red" : "",
    }

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
