import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UserService from "../../services/user.service";

const Home = () => {

  console.log(localStorage.getItem("user"));

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{JSON.parse(localStorage.getItem("user"))}</h3>
      </header>
      <Link to="/login">
        <button>LOGIN</button>
      </Link>
    </div>
  );
};

export default Home;
