import React from "react";
import UserSignIn from "./UserSignIn/UserSignIn";
import UserRegister from "./UserRegister/UserRegister";


const RenderRoute = ({route}) => {
  switch (route) {
    case 'signin':
      return <UserSignIn/>
      break;
    case 'register':
      return <UserRegister/>
      break;
    case 'userhome':
      return <div>User Home</div>;
      break;
    case 'pending':
      return <div>Pending Page</div>;
      break;
    case 'rescheduled':
      return <div>Rescheduled</div>;
      break;
    case 'checked':
      return <div>Health Checklist</div>;
      break;
    case 'confirmed':
      return <div>Details</div>;
      break;
    case 'adminsignin':
      return <div>SignIn</div>;
      break;
    case 'adminhome':
      return <div>Admin Home</div>;
      break;
    default:
      return <div>Sign In</div>;
  }
};

export default RenderRoute;