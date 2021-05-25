import React from "react";
import BookingForm from "./BookingForm";
import ConfirmedDetails from "./ConfirmedDetails";
import HealthChecklist from "./HealthChecklist";
import Pending from "./Pending";
import Rescheduled from "./Rescheduled";
import Services from "./Services";


const RenderStatus = ({user, resetBooking, onSubmitBooking, onInputChange, loadBooking, loadUser, onRouteChange}) => {
  switch (user.status) {
    case 'pending':
      return <Pending/>;
    case 'rescheduled':
      return <Rescheduled user={user} loadUser={loadUser} loadBooking={loadBooking} onRouteChange={onRouteChange} resetBooking={resetBooking}/>;
    case 'checked':
      return <HealthChecklist user={user} loadUser={loadUser} loadBooking={loadBooking} onRouteChange={onRouteChange}/>;
    case 'confirmed':
      return <ConfirmedDetails user={user} />;
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