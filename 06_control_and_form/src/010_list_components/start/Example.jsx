const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const helloAnimals = animals.map((animal, index) => (
    <li key={`${animal}-${index}`}>Hello, {animal}</li>
  ));

  return (
    <>
      <h3>配列の操作</h3>
      <ul>{helloAnimals}</ul>
    </>
  );
};

export default Example;
