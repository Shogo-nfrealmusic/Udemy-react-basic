const Example = () => {
  const clickHander = () => {
    alert("Button clicked");
  };
  const clickHander2 = () => {
    alert("Button clicked2");
  };
  return (
    <>
      <button onClick={clickHander}>Click</button>
      <button onClick={clickHander2}>Click</button>
    </>
  );
};

export default Example;
