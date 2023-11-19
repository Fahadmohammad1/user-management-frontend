import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.user);

  const userData: any = localStorage.getItem("user");
  const userInfo = JSON.parse(userData);

  dispatch(
    setUser({
      email: userInfo?.email,
      first_name: userInfo?.first_name,
      last_name: userInfo?.last_name,
    })
  );

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(
      setUser({
        email: null,
        first_name: null,
        last_name: null,
      })
    );
  };

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <a href="#about">About</a>
        <Link to="/team">My Team</Link>
        {user.email ? (
          <a href="" onClick={() => handleLogout()}>
            Logout
          </a>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
