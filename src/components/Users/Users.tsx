import { useState } from "react";
import { useAllUserQuery } from "../../redux/api/userApi";
import UserCard from "./UserCard";
import "./Users.css";

const Users = () => {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const { data, isLoading } = useAllUserQuery({});
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="user-section" id="users">
      <h1>Available Users</h1>
      <div>
        <div className="select-dropdown">
          <select
            className="select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Domain</option>
            {data.data.map((user) => (
              <option value={user.domain}>{user.domain}</option>
            ))}
          </select>
          {selectedOption && (
            <div className="selected-option">
              You selected: <strong>{selectedOption}</strong>
            </div>
          )}
        </div>
      </div>
      <div className="card-div">
        {data?.data?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default Users;
