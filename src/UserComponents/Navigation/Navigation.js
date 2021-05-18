import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('userhome')} className='f4 fw5 mh2 white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Home</p>
        <p onClick={() => onRouteChange('signout')} className='f4 fw5 mh2 white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Logout</p>
    </nav>
    );
}

export default Navigation;