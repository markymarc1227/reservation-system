import React from "react";
import BookingForm from "./BookingForm";
import ConfirmedDetails from "./ConfirmedDetails";
import HealthChecklist from "./HealthChecklist";
import Pending from "./Pending";
import Rescheduled from "./Rescheduled";
import Services from "./Services";


const RenderStatus = ({user, onSubmitBooking, onInputChange, loadBooking, onRouteChange}) => {
  switch (user.status) {
    case 'pending':
      return <Pending/>;
    case 'rescheduled':
      return <Rescheduled user={user} loadBooking={loadBooking} onRouteChange={onRouteChange}/>;
    case 'checked':
      return <HealthChecklist/>;
    case 'confirmed':
      return <ConfirmedDetails/>;
    default:
      return (
        <div className="flex flex-wrap">
          <BookingForm user={user} onInputChange={onInputChange} onSubmitBooking={onSubmitBooking}/>
          <Services/>
        </div>
      );
  }
};

export default RenderStatus;