

const Example = () => {
  function sum1(x: number, y: number){
    return x + y;
  };
  const result1 = sum1(1,2);
  console.log(result1);


  const sum2 = (x: number, y: number) => {
    return x + y;
  };
  const result2 = sum2(1,2);
  console.log(result2);
};

export default Example;
