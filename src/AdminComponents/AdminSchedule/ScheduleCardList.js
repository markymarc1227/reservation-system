import React from 'react';
import {CustomerCard} from './ScheduleCard';

const ScheduleCardList = ({schedCustomers, onCompleteCustomer}) => {

  if (!schedCustomers.length){
    return <h1 className="f1 tc pa2">No customers for this date.</h1>
  }

  return(
    <div>
        {
          schedCustomers.map((customer, i) => {
            return (
              <CustomerCard
                key={i}
                user_id={schedCustomers[i].user_id}
                req_id={schedCustomers[i].req_id}
                name={schedCustomers[i].firstname +" "+ schedCustomers[i].lastname}
                reqtime={schedCustomers[i].reqtime}
                service={schedCustomers[i].service}
                barber={schedCustomers[i].barber}
                onCompleteCustomer={onCompleteCustomer}
              />
            );
          })
        }
        
    </div>


  );
};

export default ScheduleCardList;