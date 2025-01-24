import React from "react";
import { Fragment } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import LoginPage from "./Components/LoginPage";
import Parent from "./Components/Parent";
import Teacher from "./Components/Teacher";
import SignInPage from "./Components/SignIn";
import "./Components/Home.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  let userRole;

  const handleUserRoleChange = (role) => {
    sessionStorage.setItem("UserRole", role);
    userRole = role ?? sessionStorage.UserRole;
    console.log("UserRole updated to:", userRole);

    if (role === "Teacher") {
      window.location.href = "/teacher";
    } else if (role === "Parent") {
      window.location.href = "/parent";
    }
  };

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutAIMS" component={About} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/login">
            {/* Pass onUserRoleChange as a prop to LoginPage */}
            <LoginPage onUserRoleChange={handleUserRoleChange} />
          </Route>

          <Route path="/parent">
            {sessionStorage.UserRole === "Parent" ? (
              <Parent />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route path="/teacher">
            {sessionStorage.UserRole === "Teacher" ? (
              <Teacher />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
