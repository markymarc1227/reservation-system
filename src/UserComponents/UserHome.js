import React from 'react';
import RenderStatus from './RenderStatus';
import Navigation from './Navigation/Navigation';

const UserHome = ({user, resetBooking, onRouteChange, onInputChange, onSubmitBooking, onRefresh, loadBooking, loadUser, hasBookingFormError }) => {

  return(
        <div>
            <Navigation onRouteChange={onRouteChange}/>
            <h1 className="f1 ma2 tc"> {`Hi, ${user.name}`}!</h1>
            <RenderStatus onInputChange={onInputChange} user={user} onSubmitBooking={onSubmitBooking} loadBooking={loadBooking} onRouteChange={onRouteChange} onRefresh={onRefresh} resetBooking={resetBooking} loadUser={loadUser} hasBookingFormError={hasBookingFormError}/>
        </div>
  );
}

export default UserHome;
