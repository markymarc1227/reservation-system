import React from "react";
import BookingForm from "./BookingForm";
import ConfirmedDetails from "./ConfirmedDetails";
import HealthChecklist from "./HealthChecklist";
import Pending from "./Pending";
import Rescheduled from "./Rescheduled";
import Services from "./Services";


const RenderStatus = ({barber, service, status, onSubmitBooking, onInputChange}) => {
  switch (status) {
    case 'pending':
      return <Pending/>;
    case 'rescheduled':
      return <Rescheduled/>;
    case 'checked':
      return <HealthChecklist/>;
    case 'confirmed':
      return <ConfirmedDetails/>;
    default:
      return (
        <div className="flex flex-wrap">
          <BookingForm barber={barber} service={service} onInputChange={onInputChange} onSubmitBooking={onSubmitBooking}/>
          <Services/>
        </div>
      );
  }
};

export default RenderStatus;