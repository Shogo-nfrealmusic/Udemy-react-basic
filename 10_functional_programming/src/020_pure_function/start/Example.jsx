const Example = () => {

  const val1 = 10;
  const val2 = 20;
  const add = (val1, val2) => {
    return val1 + val2;
  } 
  return (
    <>
      <div>Pure function: {add(val1,val2)}</div>
    </>
  );
};

export default Example;
