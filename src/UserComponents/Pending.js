import React from 'react';

const Pending = ({onRefresh}) => {
    return(
        <article className="br4 ba bg-white b--black-10 mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
            <main className="pa4 pb3 black-80 white">
                <div className="tc f4 pt4 pb1 black ">Your request is currently being processed, visit this page in the next couple of hours to see your appointment status.</div>
            </main>
            <div className="flex justify-center">
              <button className="b ba br3 bw1 mb4 mt3 pv0 ph3 b--transparent tc bg-moon-gray pointer grow" 
              onClick={onRefresh}>Refresh</button>
            </div>
        </article>
    );
}

export default Pending;