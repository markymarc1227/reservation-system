import React from 'react';
import RenderStatus from './RenderStatus';
import Navigation from './Navigation/Navigation';

const UserHome = ({user, onRouteChange, onInputChange, onSubmitBooking, loadBooking }) => {
  return(
        <div>
            <Navigation onRouteChange={onRouteChange}/>
            <h1 className="f1 ma2 tc"> {`Hi, ${user.name}`}!</h1>
            <RenderStatus onInputChange={onInputChange} user={user} onSubmitBooking={onSubmitBooking} loadBooking={loadBooking} onRouteChange={onRouteChange}/>
        </div>
  );
}

export default UserHome;
