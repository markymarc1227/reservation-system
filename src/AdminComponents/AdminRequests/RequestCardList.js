import React from 'react';
import {CustomerCard} from './RequestCard';

const RequestCardList = ({pendingCustomers, onApproveCustomer, onOpenRescheduleModal}) => {
  if (!pendingCustomers.length){
    return <h1 className="f1 tc pa2">No requests for this date.</h1>
  }

  return(
    <div>
        {
          pendingCustomers.map((customer, i) => {
            return (
              <CustomerCard
                key={i}
                index={i}
                user_id={pendingCustomers[i].user_id}
                req_id={pendingCustomers[i].req_id}
                name={pendingCustomers[i].firstname +" "+ pendingCustomers[i].lastname}
                reqtime={pendingCustomers[i].reqtime}
                service={pendingCustomers[i].service}
                barber={pendingCustomers[i].barber}
                onApproveCustomer={onApproveCustomer}
                onOpenRescheduleModal={onOpenRescheduleModal}
              />
            );
          })
        }
    </div>
  );
};

export default RequestCardList;