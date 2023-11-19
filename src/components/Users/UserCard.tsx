import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import "./UserCard.css";
import toast from "react-hot-toast";

const UserCard = ({ userData }) => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user.email) {
      toast.error("please login");
      navigate("/login");
    } else {
      console.log("clicked");
    }
  };
  return (
    <div className="card">
      <div className="image-div">
        <img className="card-image" src={userData?.avatar} alt="Card Image" />
        {userData?.available && (
          <span className="badge">
            {userData?.available ? "Available" : ""}
          </span>
        )}
      </div>
      <div className="card-content">
        <h2 className="card-heading">
          {userData.first_name} {userData.last_name}
        </h2>
        <p className="card-property">email : {userData.email}</p>
        <p className="card-property">Gender : {userData.gender}</p>
        <p className="card-property">Domain : {userData.domain}</p>

        <button className="card-button" onClick={() => handleClick()}>
          Add to team
        </button>
      </div>
    </div>
  );
};

export default UserCard;
