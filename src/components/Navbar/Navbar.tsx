import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useAppSelector((state) => state.user);

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
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
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
