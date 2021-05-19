import React from "react";
import UserSignIn from "./UserSignIn/UserSignIn";
import UserRegister from "./UserRegister/UserRegister";
import UserHome from "./UserComponents/UserHome";


const RenderRoute = ({route, onInputChange, status, name, onRouteChange}) => {
  switch (route) {
    case 'signin':
      return (
        <div>
          <h1 className="f-subheadline tc mh2">SUPREMO BARBERS - STA. CRUZ</h1>
          <UserSignIn onRouteChange={onRouteChange}/>
        </div>
        );
    case 'register':
      return (
        <div>
          <h1 className="f-subheadline tc mh2 mb3">SUPREMO BARBERS - STA. CRUZ</h1>
          <UserRegister onRouteChange={onRouteChange}/>
        </div>
        );
    case 'userhome':
      return <UserHome onRouteChange={onRouteChange} onInputChange={onInputChange} 
      status={status} name={name}/>;
    case 'adminsignin':
      return <div>SignIn</div>;
    case 'adminhome':
      return <div>Admin Home</div>;
    default:
      return (
          <div>
            <h1 className="f-subheadline tc mh2">SUPREMO BARBERS - STA. CRUZ</h1>
            <UserSignIn onRouteChange={onRouteChange}/>
          </div>
        );
  }
};

export default RenderRoute;