import React from "react";

const RenderRoute = ({route}) => {
  switch (route) {
    case 'signin':
      return <div>Sign In</div>
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

export default AuthButton;