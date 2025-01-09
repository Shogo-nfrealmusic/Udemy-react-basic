const Example = () => {
  const arry1: number[] = [1,2,3];
  console.log(arry1);
  const arry2: string[] = ['a', 'b', 'c'];
  console.log(arry2);
  const arry3: Array<string> = ['a', 'b', 'c'];
  console.log(arry3);

  const obj1: { name: string, age: number} = { name: 'shogo', age: 20};
  console.log(obj1);
};

export default Example;
