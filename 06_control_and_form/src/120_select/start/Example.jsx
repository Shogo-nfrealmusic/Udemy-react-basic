import { useState } from "react";

const Example = () => {
  const [selected, setSelected] = useState('Banana');

  const OPTIONS = ["Apple", "Banana", "Cherry"];
  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {OPTIONS.map((fruit) =>  <option key={fruit} value={fruit}>{fruit}</option>)}
        {/* <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option> */}
      </select>
      <div>Chosen: {selected}</div>
    </>
  );
};

export default Example;
