import React from 'react';
import {CustomerCard} from './CompletedCard';

const CompletedCardList = ({CompletedCustomers, onViewDetails}) => {
  if (!CompletedCustomers.length){
    return <h1 className="f1 tc pa2">No customers for this date.</h1>
  }

  return(
    <div>
        {
          CompletedCustomers.map((customer, i) => {
            return (
              <CustomerCard
                key={i}
                index={i}
                customerDetails={CompletedCustomers[i]}
                onViewDetails={onViewDetails}
              />
            );
          })
        }
    </div>
  );
};

export default CompletedCardList;