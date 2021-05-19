import React from 'react';

const Rescheduled = ( ) => {
    return(
        <article className="br4 ba bg-white b--black-10 mv4 w-100 w-50-m w-40-l mw6 shadow-5 center">
            <main className="pa4 black-80 white">
                <div className="tc f4 mt3 black ">Your request was rescheduled on:</div>
                <div className="tc f4 b pv4 black ">___Date___ at ___Time___</div>
                <div className="tc f4 black ">Do you accept?</div>
                <button className="white ph4 mv2 pv2 input-reset ba br4 b--transparent bg-green grow pointer f6 db center">
                    Confirm
                </button>
                <p className="tc f4 black mv0">----- or -----</p>
                <button className="white ph4 mv2 pv2 input-reset ba br4 b--transparent bg-dark-green grow pointer f6 db center">
                    Reschedule
                </button>
                <button className="white ph4 mt5 mb1 pv1 input-reset ba br4 b--transparent bg-red grow pointer f6 db center">
                    Cancel my appointment.
                </button>
            </main>
        </article>
    );
}

export default Rescheduled;