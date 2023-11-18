import "./UserCard.css";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div className="card">
      <img className="card-image" src={user.avatar} alt="Card Image" />
      <div className="card-content">
        <h2 className="card-heading">
          {user.first_name} {user.last_name}
        </h2>
        <p className="card-property">Property 1: Value 1</p>
        <p className="card-property">Property 2: Value 2</p>

        <button className="card-button">Add to team</button>
      </div>
    </div>
  );
};

export default UserCard;
