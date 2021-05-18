import React from "react";

const RenderStatus= ({route}) => {
  switch (route) {
    case 'pending':
      return <div>Pending Page</div>;
    case 'rescheduled':
      return <div>Rescheduled</div>;
    case 'checked':
      return <div>Health Checklist</div>;
    case 'confirmed':
      return <div>Details</div>;
    default:
      return <div>Booking and Service Page</div>;
  }
};

export default RenderStatus;