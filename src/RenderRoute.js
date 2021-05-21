import React from "react";
import UserSignIn from "./UserSignIn/UserSignIn";
import UserRegister from "./UserRegister/UserRegister";
import UserHome from "./UserComponents/UserHome";
import AdminSignIn from "./AdminSignIn/AdminSignIn";
import AdminHome from "./AdminComponents/AdminHome";

const RenderRoute = ({route, onInputChange, status, name, onRouteChange, loadUser, loadBooking, onSubmitBooking}) => {
  switch (route) {
    case 'signin':
      return <UserSignIn onRouteChange={onRouteChange} loadUser={loadUser} loadBooking={loadBooking}/>;

    case 'register':
      return <UserRegister onRouteChange={onRouteChange} loadUser={loadUser}/>;

    case 'userhome':
      return <UserHome onRouteChange={onRouteChange} onInputChange={onInputChange} 
      status={status} name={name} onSubmitBooking={onSubmitBooking}/>;

    case 'adminsignin':
      return <AdminSignIn onRouteChange={onRouteChange}/>;

    case 'adminhome':
      return <AdminHome onRouteChange={onRouteChange}/>;
      
    default:
      return <UserSignIn onRouteChange={onRouteChange} loadUser={loadUser} loadBooking={loadBooking}/>;
  }
};

export default RenderRoute;