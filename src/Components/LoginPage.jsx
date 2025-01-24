import React, { useState } from "react";
import "./Login.css";

const LoginPage = ({ onUserRoleChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let role = null;
    if (email === "teacher@aims.co.in") {
      role = "Teacher";
    } else if (email === "parent@aims.co.in") {
      role = "Parent";
    } else {
      alert("You are not authorized to log in to these secure pages.");
      return;
    }
    onUserRoleChange(role); // Call the callback function with the user role
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    window.location.href = "/signIn";
  };

  return (
    <div className="containerLogin">
      <div className="form-containerLogin">
        <form onSubmit={handleSubmit}>
          <h2 className="title">Login</h2>
          <div className="user-details">
            <div className="input-box">
              <span className="details">Email address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <span className="details">Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="input-box checkbox-container">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span
                className="detailsRememberMe"
                style={{ marginLeft: "-8rem" }}
              >
                Remember Me
              </span>
            </div>
          </div>
          <div className="buttonOverallDivs">
            <div className="buttonLogIn">
              <input type="submit" value="Log in" />
            </div>
            <div className="buttonSignIn">
              <input type="submit" value="Sign in" onClick={handleSignIn} />
            </div>
          </div>
          <div className="link">
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
