import { User } from ".";
import { LoadingHOC } from "../hoc/loadingHOC";

function ListUsers({ users }: { users: User[] }) {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default LoadingHOC(ListUsers);
