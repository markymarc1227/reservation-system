import React from 'react';
import './CompletedCard.css'

export const HeaderCard = () => {
  return(
    <div className="comwrapper tc mh3 mv1 ba br2 bw1 f5 pa1 white bg-black b--black">
        <div>Time</div>
        <div>Req ID</div>
        <div>Customer</div>
        <div>Staff</div>
        <div>Contact No.</div>
        <div>Details</div>
    </div>
  );
};

export const CustomerCard = ({index, customerDetails, onViewDetails}) => {
    const name = customerDetails.firstname + " " + customerDetails.lastname; 

    const formatTime = new Date('1970-01-01T' + customerDetails.reqtime + 'Z')
    .toLocaleTimeString({},
        {timeZone:'UTC', hour12:true, hour:'numeric', minute:'numeric'}
    );

    const formatName = name.split(" ").map((word) => { 
      return word[0].toUpperCase() + word.substring(1); 
      }).join(" ");

    return(
      <div className="comwrapper tc mh3 mv1 ba br3 bw1 f5 pa1 black bg-white b--black">
        <div className="flex items-center justify-center">{formatTime}</div>
        <div className="flex items-center justify-center">{customerDetails.req_id}</div>
        <div className="flex items-center justify-center">{formatName}</div>
        <div className="flex items-center justify-center">{customerDetails.barber}</div>
        <div className="flex items-center justify-center">{customerDetails.contact}</div>
        <div className="flex items-center justify-center">
          <button onClick={onViewDetails} value={index} className="ma1 underline input-reset b--transparent pointer bg-transparent dim">Details</button>
        </div>
    </div>
    );
  };