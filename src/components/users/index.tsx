import ListPosts from "./list-users";
import { useEffect, useState } from "react";
import axios from "axios";

export interface User {
  id: number;
  name: string;
}

export function UserComponent() {
  const [users, setUsers] = useState<User[]>([]);

  async function hadleGetUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setTimeout(() => {
      setUsers(response.data);
    }, 3000);
  }

  useEffect(() => {
    hadleGetUsers();
  }, []);

  return (
    <div>
      <h1>USERS</h1>
      <ListPosts users={users} isLoading={users.length === 0} />
    </div>
  );
}
