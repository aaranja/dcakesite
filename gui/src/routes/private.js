import React from "react";
import {Navigate, useParams} from "react-router-dom";
import AdminSite from "../pages/AdminSite";

const isLogged = () => {
    return !!localStorage.getItem("token");
};

const PrivateRoute = ({element: Component, ...rest}) => {
    let path_to_login = "/admin-site/login";
    const params = useParams();

    return isLogged() ? <AdminSite {...rest} {...params}/> : <Navigate to={path_to_login} params={params}/>
}

export default PrivateRoute;