import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label htmlFor="my-check">check</label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
