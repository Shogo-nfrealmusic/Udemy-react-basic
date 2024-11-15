import { useState } from "react";

const Child = ({ state, setState}) => {
  // setState({ value: 1 });
  return (
    <>
      <span>{state.value}</span>
      <button onClick={() => setState({ value: state.value + 1 })}>Increment</button>
    </>
  );
};

const Example = () => {
  const [ state, setState ] = useState({ value: 0 });

  return (
    <>
      <div>
        <Child state={state} setState={setState}/>
      </div>
    </>
  );
};

export default Example;
