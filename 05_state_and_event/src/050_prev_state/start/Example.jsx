import { useState } from "react";

const Example = () => {
  const [num, setNum] = useState(0);
  const countUp = () => {
    setNum(num + 1);
    setNum((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setNum(num - 1);
  };
  return (
    <>
      <p>Current Count{num}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
