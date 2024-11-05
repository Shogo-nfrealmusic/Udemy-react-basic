import { useState } from "react";

const Example = () => {
  const [set, setVal] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setVal(e.target.value)} /> = {set}
    </>
  );
};

export default Example;
