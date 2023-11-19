import { useDispatch } from "react-redux";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import { setUser } from "./redux/features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  const userData: any = localStorage.getItem("user");
  const user = JSON.parse(userData);

  dispatch(
    setUser({
      email: user?.email,
      first_name: user?.first_name,
      last_name: user?.last_name,
    })
  );
  return (
    <>
      <Navbar />
      <Banner />
      <Users />
    </>
  );
}

export default App;
