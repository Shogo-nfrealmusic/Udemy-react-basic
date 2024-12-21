import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    const getUser = async() => {
      const res = await axios.get('http://localhost:3003/user')
      setUsers(res.data);
    }
    getUser();
  }, [])
  return (
    <div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <h3>name: {user.username}</h3>
            <h3>age: {user.age}</h3>
            <h3>hobby: {user.hobbies.join(',')}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Example;
