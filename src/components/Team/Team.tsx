import { useTeamMembersQuery } from "../../redux/api/teamApi";
import { useAppSelector } from "../../redux/hook";
import UserCard from "../Users/UserCard";
import "./Team.css";

const Team = () => {
  const { user } = useAppSelector((state) => state.user);
  const { data, isLoading } = useTeamMembersQuery(user.email);
  console.log(data?.data?.members);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <section>
        <h1>
          {user?.first_name} {user?.last_name}'s Team
        </h1>
        <div className="team-div">
          {data?.data?.members.map((member) => (
            <UserCard key={member.memberId._id} userData={member.memberId} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Team;
