import React from 'react';
import RenderStatus from './RenderStatus';
import Navigation from './Navigation/Navigation';

const UserHome = ({user, resetBooking, onRouteChange, onInputChange, onSubmitBooking, loadBooking, loadUser }) => {
  return(
        <div>
            <Navigation onRouteChange={onRouteChange}/>
            <h1 className="f1 ma2 tc"> {`Hi, ${user.name}`}!</h1>
            <RenderStatus onInputChange={onInputChange} user={user} onSubmitBooking={onSubmitBooking} loadBooking={loadBooking} onRouteChange={onRouteChange} resetBooking={resetBooking} loadUser={loadUser}/>
        </div>
  );
}

export default UserHome;
