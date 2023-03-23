
import React, { Fragment, useState, useEffect } from "react";
import Toast from "./toast";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";


//components

import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";




function App(props) {

const checkAuthenticated = () => {
  const token = localStorage.getItem("jwt_token");
  if (token) {
    fetch("http://localhost:5000/auth/verify", {
      method: "POST",
      headers: { jwt_token: token },
    })
      .then((res) => res.json())
      .then((parseRes) => {
        setIsAuthenticated(parseRes);
      })
      .catch((err) => {
        console.error(err.message);
      });
  } else {
    setIsAuthenticated(false);
  }
};

  // useEffect(() => {
  //   checkAuthenticated();
  // }, []);

  useEffect(() => {
  checkAuthenticated();
  setIsAuthenticated(!!localStorage.getItem("jwt_token"));
  }, []);
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const setAuth = (boolean) => {
  setIsAuthenticated(boolean);
  localStorage.setItem("jwt_token", boolean ? "true" : "");
};

  return (
    <Fragment>
      <Router>
      <Toast />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login/>} exact />
            <Route
              path="/login"
              element={!isAuthenticated ? <Login {...props} setAuth={setAuth} setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/register"
              element={!isAuthenticated ? <Register {...props} setIsAuthenticated={setIsAuthenticated} setAuth={setAuth} /> : <Navigate to="/dashboard" />}
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard {...props} setAuth={setAuth} setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;