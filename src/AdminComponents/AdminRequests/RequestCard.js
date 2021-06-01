import React from 'react';
import './RequestCard.css'

export const HeaderCard = () => {
  return(
    <div className="reqwrapper tc mh3 mv1 ba br2 bw1 f5 pa1 white bg-black b--black">
        <div>Time</div>
        <div>Req ID</div>
        <div>Customer</div>
        <div>Service</div>
        <div>Staff</div>
        <div>Action</div>
    </div>
  );
};

export const CustomerCard = ({index, user_id, req_id, name, reqtime, service, barber, onApproveCustomer, onOpenRescheduleModal}) => {
    const formatTime = new Date('1970-01-01T' + reqtime + 'Z')
    .toLocaleTimeString({},
        {timeZone:'UTC', hour12:true, hour:'numeric', minute:'numeric'}
    );

    const formatName = name.split(" ").map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
      }).join(" ");
    return(
      <div className="reqwrapper tc mh3 mv1 ba br3 bw1 f5 pa1 black bg-white b--black">
        <div className="flex items-center justify-center">{formatTime}</div>
        <div className="flex items-center justify-center">{req_id}</div>
        <div className="flex items-center justify-center">{formatName}</div>
        <div className="flex items-center justify-center">{service}</div>
        <div className="flex items-center justify-center">{barber}</div>
        <div className="flex flex-wrap center justify-around">
          <button onClick={onApproveCustomer} value={req_id} className="ba b br3 bw1 pv0 ph2 mv1 mh3 dark-green bg-light-green b--dark-green grow pointer">Approve</button>
          <button onClick={onOpenRescheduleModal} value={index} className="ba br3 bw1 pv0 ph2 mv1 mh3 black bg-light-silver b--black grow pointer">Reschedule</button>
        </div>
    </div>
    );
  };