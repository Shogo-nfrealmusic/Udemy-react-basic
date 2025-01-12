const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  } 
  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  } 
  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value);
  }
  // const strArry = repeatStr('hello', 3);
  // console.log(strArry);
  const numArry = repeat<number>(10, 3);
  console.log(numArry);
};

export default Example;
