import React from "react";
import BookingForm from "./BookingForm";
import Pending from "./Pending";
import Services from "./Services";


const RenderStatus= ({onInputChange, status}) => {
  switch (status) {
    case 'pending':
      return <Pending/>;
    case 'rescheduled':
      return <div>Rescheduled</div>;
    case 'checked':
      return <div>Health Checklist</div>;
    case 'confirmed':
      return <div>Details</div>;
    default:
      return (
        <div className="flex flex-wrap">
          <BookingForm onInputChange={onInputChange}/>
          <Services/>
        </div>
      );
  }
};

export default RenderStatus;