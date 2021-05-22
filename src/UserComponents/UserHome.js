import React from 'react';
import RenderStatus from './RenderStatus';
import Navigation from './Navigation/Navigation';

const UserHome = ({name, status, barber, service, onRouteChange, onInputChange, onSubmitBooking }) => {
  return(
        <div>
            <Navigation onRouteChange={onRouteChange}/>
            <h1 className="f1 ma2 tc"> {`Hi, ${name}`}!</h1>
            <RenderStatus onInputChange={onInputChange} status={status} barber={barber} service={service} onSubmitBooking={onSubmitBooking}/>
        </div>
  );
}

export default UserHome;
