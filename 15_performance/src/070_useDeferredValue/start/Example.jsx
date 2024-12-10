import { useState, useTransition, useDeferredValue } from "react";

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  // const [isPending, startTransition] = useTransition();
  const [filterVal, setFilterVal] = useState("");

  const changeHandler = (e) => {
    setFilterVal(e.target.value);
  };
    // startTransition(() => {
    // })

  const fiteredItems = dummyItems
  .filter((item) => {
    if (filterVal === "") return true;
    return item.includes(filterVal);
  })
  .map((item) => (
    <li key={item}>{item}</li>
  ));

  const deferredItems = useDeferredValue(fiteredItems)

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {/* {isPending && <div>Loading...</div>} */}
      <ul>
        {deferredItems}
      </ul>
    </>
  );
};

export default Example;
