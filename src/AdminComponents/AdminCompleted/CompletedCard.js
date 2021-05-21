import React from 'react';
import './CompletedCard.css'

export const HeaderCard = () => {
  return(
    <div className="comwrapper tc mh3 mv1 ba br2 bw1 f5 pa1 white bg-black b--black">
        <div>Time</div>
        <div>Customer</div>
        <div>Contact No.</div>
        <div>Service</div>
        <div>Staff</div>
        <div>Action</div>
    </div>
  );
};

export const CustomerCard = () => {
    return(
      <div className="comwrapper tc mh3 mv1 ba br3 bw1 f5 pa1 black bg-white b--black">
        <div className="flex items-center justify-center">11:59am/pm</div>
        <div className="flex items-center justify-center">Remao Maytal Olufemi Heraclitus</div>
        <div className="flex items-center justify-center">09123456789</div>
        <div className="flex items-center justify-center">Supremo Espesyal w/ Ahit</div>
        <div className="flex items-center justify-center">Anyone</div>
        <div className="flex items-center justify-center">
          <p className="ma1 underline b pointer dim">Details</p>
        </div>
    </div>
    );
  };