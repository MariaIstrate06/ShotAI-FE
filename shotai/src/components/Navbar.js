import React from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import "./Navbar.css"
import logo from "../media/logo.svg"

const NavBar = () => {
    const handleLogOut = () => {
        AuthService.logout();
        console.log("logged out")
    };

    return (
        <div className="nav">
            <div className="left-side">
                <Link to="/home">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="right-side">
                <div className="nav-elem">
                    <i className="fas fa-users nav-icon" />
                    <Link to="/team">Team</Link>
                </div>
                <div className="nav-elem">
                    <i className="fas fa-play-circle nav-icon" />
                    <Link to="/games">Games</Link>
                </div>
                <div className="nav-elem">
                    <i className="fas fa-area-chart nav-icon" />
                    <Link to="/reports">Reports</Link>
                </div>
                <div className="nav-elem">
                    <i className="fas fa-sign-out nav-icon" />
                    <Link to="/login" onClick={handleLogOut}>Log Out</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
