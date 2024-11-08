import { useState } from "react";
const Example = () => {
  const [fruit, setFruit] = useState("apple");
  const onChange = (e) => setFruit(e.target.value);
  const RADIO_CORRECTION = ["Apple", "Banana", "Cherry"];
  return (
    <>
      {RADIO_CORRECTION.map((value) => {
        return (
          <label key={value}>
            <input
              type="radio"
              value={value}
              checked={fruit === value}
              onChange={onChange}
            />
            {value}
          </label>
        );
      })}
      <h2>I wanna eat {fruit}</h2>
    </>
  );
};

export default Example;
