import { useState } from "react";
import { useAllUserQuery } from "../../redux/api/userApi";
import UserCard from "./UserCard";
import "./Users.css";

const Users = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setChecked] = useState(false);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const { data, isLoading } = useAllUserQuery(
    isChecked ? { available: true } : {}
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="user-section" id="users">
      <h1>Available Users</h1>
      <div className="filter-div">
        <h4>filters : </h4>
        <div className="select-dropdown">
          <select
            className="select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Domain</option>
            {Array.from(new Set(data?.data?.map((user) => user.domain))).map(
              (domain, i) => (
                <option key={i} value={domain}>
                  {domain}
                </option>
              )
            )}
          </select>
          {selectedOption && (
            <div className="selected-option">
              You selected: <strong>{selectedOption}</strong>
            </div>
          )}
        </div>
        <div className="select-dropdown">
          <select
            className="select"
            value={selectedOption}
            onChange={handleSelectChange}
          >
            <option value="">Gender</option>
            {Array.from(new Set(data?.data?.map((user) => user.gender))).map(
              (gender, i) => (
                <option key={i} value={gender}>
                  {gender}
                </option>
              )
            )}
          </select>
          {selectedOption && (
            <div className="selected-option">
              You selected: <strong>{selectedOption}</strong>
            </div>
          )}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
          </label>
          Available
        </div>
      </div>
      <div className="card-div">
        {data?.data?.map((userData) => (
          <UserCard key={userData.id} userData={userData} />
        ))}
      </div>
    </section>
  );
};

export default Users;
