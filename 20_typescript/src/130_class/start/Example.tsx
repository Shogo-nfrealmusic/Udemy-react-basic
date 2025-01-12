class User {
  public name: string;
  public age : number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Example = () => {
  // const user = { name: 'shogo', age: 20 }
  const user1 = new User('shogo', 20);
  return (
    <div>
      <p>Name: {user1.name}</p>
      <p>Age: {user1.age}</p>
    </div>
  )
};

export default Example;
