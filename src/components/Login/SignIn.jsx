import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/auth/login`,
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        // Use navigate to go to the home page
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="form-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <span className="fIcon">
            <FaEnvelope />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required=""
            className="box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-field">
          <span className="fIcon">
            <FaLock />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required=""
            className="box"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button className="iBtn" type="submit" value="Sign In">
          Sign In
        </button>
        <p>
          Don't have an account?
          <NavLink
            exact
            to="/register"
            activeClassName="active"
            className="jump"
          >
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
