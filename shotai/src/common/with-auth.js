import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
    return (props) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user || !user.token) {
            return <Navigate to="/login" />;
        }
        return <Component {...props} />;
    };
};

export default withAuth;
