import Hello, { Btn } from "./Hello";

const Example = () => {
  return (
    <>
      <Hello text='Typescript'>children</Hello>
      <Btn fn={(text) => console.log(text)}/>
    </>
);
};

export default Example;
