import React from "react";
import UserSignIn from "./UserSignIn/UserSignIn";
import UserRegister from "./UserRegister/UserRegister";
import UserHome from "./UserComponents/UserHome";


const RenderRoute = ({route, onInputChange, status, onRouteChange}) => {
  switch (route) {
    case 'signin':
      return <UserSignIn onRouteChange={onRouteChange}/>;
    case 'register':
      return <UserRegister onRouteChange={onRouteChange}/>;
    case 'userhome':
      return <UserHome onInputChange={onInputChange} status={status} />;
    case 'adminsignin':
      return <div>SignIn</div>;
    case 'adminhome':
      return <div>Admin Home</div>;
    default:
      return <UserSignIn onRouteChange={onRouteChange}/>;
  }
};

export default RenderRoute;