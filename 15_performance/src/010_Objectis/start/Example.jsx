import { useState } from "react";

const Example = () => {
  console.log("render");

  const [countA, setCountA] = useState({
    val: 0
  });

  const obj1 = {val:0}
  const obj2 = {...obj1}
  const isSame = Object.is(obj1, obj2)
  console.log(isSame)

  return (
    <>
      <div className="parent">
        <h3>Re-render</h3>
        <button onClick={() => {
          setCountA(prev => {
            const newState = {...prev};
            newState.val = 1;
            return newState;
          });
        }}>
          buttonA
        </button>
      </div>
      <div>
        <p>ButtonAClick: {countA.val}</p>
      </div>
    </>
  );
};

export default Example;
