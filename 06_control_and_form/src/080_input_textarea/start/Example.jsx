import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clearVal = () => setVal("");
  return (
    <div>
      <label htmlFor="456">Label</label>
      <div>
        <input
          id="123"
          placeholder="hello"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea
          id="456"
          placeholder="hello"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>
      <h3>{val}</h3>
      <button onClick={clearVal}>clear</button>
    </div>
  );
};

export default Example;
