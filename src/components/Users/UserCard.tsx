import "./UserCard.css";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="card">
      <div className="image-div">
        <img className="card-image" src={user.avatar} alt="Card Image" />
        {user.available && (
          <span className="badge">{user.available ? "Available" : ""}</span>
        )}
      </div>
      <div className="card-content">
        <h2 className="card-heading">
          {user.first_name} {user.last_name}
        </h2>
        <p className="card-property">email : {user.email}</p>
        <p className="card-property">Gender : {user.gender}</p>
        <p className="card-property">Domain : {user.domain}</p>

        <button className="card-button">Add to team</button>
      </div>
    </div>
  );
};

export default UserCard;
