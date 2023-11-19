import { useState } from "react";
import "./Login.css";
import { useLoginMutation } from "../../redux/api/authApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await login({ email, password }).unwrap();

    if (await res?.data?.email) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: res?.data?.email,
          first_name: res?.data?.first_name,
          last_name: res?.data?.last_name,
        })
      );
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <section className="login-container">
      <div className="login-div">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
