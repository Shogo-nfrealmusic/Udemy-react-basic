import { useState } from "react";

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

const Example = () => {
  const [toggle, setToggle] = useState(true);
  const togglebutton = () => {
    setToggle((prevstate) => !prevstate);
  };
  return (
    <>
      <button onClick={togglebutton}>toggle</button>
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

export default Example;
