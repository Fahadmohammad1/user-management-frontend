import { useAllUserQuery } from "../../redux/api/userApi";
import UserCard from "./UserCard";
import "./Users.css";

const Users = () => {
  const { data, isLoading } = useAllUserQuery({});
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="user-section" id="users">
      <h1>Available Users</h1>
      <div className="card-div">
        {data?.data?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Users;
