import { useState } from "react";
import Child from "./Child";

const Example = () => {
  console.log("Parent render");
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  return (
    <div className="parent">
      <div>
        <h3>Parent component</h3>
        <div>
          <button onClick={() => {
            setCountA((prev) => prev + 1)
          }}>
            ButtonA
          </button>
          <span>Update parent state</span>
        </div>
        <div>
          <button onClick={() => {
            setCountB((prev) => prev + 1)
          }}>
            ButtonA
          </button>
          <span>Update child state</span>
        </div>
      </div>
      <div>
        <p>Count:{countA}</p>
      </div>
      <Child countB={countB}/>
    </div>
  );
};

export default Example;
