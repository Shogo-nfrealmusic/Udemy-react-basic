import React, { useState } from "react";
const Example = () => {
  const [A, setA] = useState(0);
  const [B, setB] = useState(10);
  const [C, setC] = useState(100);
  return (
    <>
      <p>click button{A}</p>
      <button onClick={() => setA(A + 1)}>buttonA</button>
      <p>click button{B}</p>
      <button onClick={() => setB(B + 10)}>buttonB</button>
      <p>click button{C}</p>
      <button onClick={() => setC(C + 100)}>buttonC</button>
    </>
  );
};

export default Example;
