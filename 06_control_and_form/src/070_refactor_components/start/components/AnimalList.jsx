import AnimalItem from "./AnimalItem";

const AnimalList = ({ filterAnimal }) => {
  if (filterAnimal.length === 0) {
    return <p>There are no animals</p>;
  }
  return (
    <ul>
      {filterAnimal.map((animal) => (
        <AnimalItem animal={animal} key={animal.id || animal.name} />
      ))}
    </ul>
  );
};

export default AnimalList;
