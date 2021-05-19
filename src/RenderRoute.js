import React from "react";
import UserSignIn from "./UserSignIn/UserSignIn";
import UserRegister from "./UserRegister/UserRegister";
import UserHome from "./UserComponents/UserHome";
import AdminSignIn from "./AdminSignIn/AdminSignIn";
import AdminHome from "./AdminComponents/AdminHome";

const RenderRoute = ({route, onInputChange, status, name, onRouteChange}) => {
  switch (route) {
    case 'signin':
      return <UserSignIn onRouteChange={onRouteChange}/>;

    case 'register':
      return <UserRegister onRouteChange={onRouteChange}/>;

    case 'userhome':
      return <UserHome onRouteChange={onRouteChange} onInputChange={onInputChange} 
      status={status} name={name}/>;

    case 'adminsignin':
      return <AdminSignIn onRouteChange={onRouteChange}/>;

    case 'adminhome':
      return <AdminHome onRouteChange={onRouteChange}/>;
      
    default:
      return <UserSignIn onRouteChange={onRouteChange}/>;
  }
};

export default RenderRoute;