import React from "react";

const RenderStatus= ({route}) => {
  switch (route) {
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
    default:
      return <div>Sign In</div>;
  }
};

export default RenderStatus;