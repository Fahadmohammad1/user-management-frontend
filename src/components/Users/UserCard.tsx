import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import "./UserCard.css";
import toast from "react-hot-toast";
import { useCreateTeamMutation } from "../../redux/api/teamApi";

const UserCard = ({ userData }) => {
  const { user } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  const [createTeam] = useCreateTeamMutation();

  const handleClick = async (userInfo) => {
    if (!user.email) {
      toast.error("please login");
      navigate("/login");
    } else {
      const res = await createTeam({
        ownerEmail: user.email,
        members: [
          {
            memberEmail: userInfo.email,
            name: userInfo.first_name + userInfo.last_name,
          },
        ],
      }).unwrap();
      console.log(res);
      if ((await res.data.acknowledged) || (await res.data._id)) {
        toast.success("Added to team");
      }
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

        <button className="card-button" onClick={() => handleClick(user)}>
          Add to team
        </button>
      </div>
    </div>
  );
};

export default UserCard;
