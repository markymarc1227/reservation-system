import React from 'react';

const ConfirmedDetails = ({user}) => {
    return(
        <article className="br4 ba bg-white b--black-10 mv4 w-100 w-50-m w-40-l mw6 shadow-5 center">
            <main className="pa4 black-80 white tc f4">
                <div className="mt3 mb2 black ">Here are the details of your appointment!</div>
                <div className="b pv0 mv3 black ">Time:</div>
                <div className="pv0 mv3 black ">{user.resTime}</div>
                <div className="b pv0 mv3 black ">Date:</div>
                <div className="pv0 mv3 black ">{user.resDate}</div>
                <div className="b pv0 mv3 black ">Service:</div>
                <div className="pv0 mv3 black ">{user.service.toUpperCase()}</div>
                <div className="b pv0 mv3 black ">Barber:</div>
                <div className="pv0 mv3 black ">{user.barber.toUpperCase()}</div>
            </main>
        </article>
    );
}

export default ConfirmedDetails;