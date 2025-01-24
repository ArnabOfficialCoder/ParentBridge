import React from "react";
import { useHistory } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const history = useHistory();

  const handleSignIn = () => {
    history.push("/login");
    alert("User Signed in successfully");
  };

  return (
    <div className="signInContainer">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <input type="submit" value="Sign In" className="signInButton" />
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
