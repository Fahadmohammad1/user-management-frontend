import "./App.css";
import Banner from "./components/Banner/Banner";
import Users from "./components/Users/Users";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Banner />
      <Users />
      <Toaster />
    </>
  );
}

export default App;
