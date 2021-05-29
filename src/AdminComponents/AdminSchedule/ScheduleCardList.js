import React from 'react';
import {HeaderCard, CustomerCard} from './ScheduleCard';

const ScheduleCardList = ({schedCustomers}) => {
  return(
    <div>
        <HeaderCard/>
        
        {
          schedCustomers.map((customer, i) => {
            return (
              <CustomerCard
                key={i}
                user_id={customer.user_id}
                req_id={customer.req_id}
                name={customer.firstname +" "+ customer.lastname}
                reqtime={customer.reqtime}
                service={customer.service}
                barber={customer.barber}
              />
            );
          })
        }
        
    </div>


  );
};

export default ScheduleCardList;