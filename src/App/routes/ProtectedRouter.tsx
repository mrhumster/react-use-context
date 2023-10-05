import React, {useContext} from "react";
import {Navigate, RouteProps} from "react-router";
import {UserContext} from "../context/userDetails";

interface ProtectedRouteProps {
    children: RouteProps["children"]
}

export function ProtectedRoute(props:ProtectedRouteProps) {
    const { children } = props
    const { user } = useContext(UserContext)
    console.log(user)
    return user?.username ? <>{ children }</> : <Navigate to="/login/" />;
}