import React from 'react';

const Navigation = ({ onRouteChange }) => {
    return(
    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signout')} className='f4 b black ph3 br4 pv2 ba bg-moon-gray grow pointer'>Sign Out</p>
        <p onClick={() => onRouteChange('signout')} className='f4 b black ph3 br4 pv2 input-reset ba bg-moon-gray grow pointer'>Sign Out</p>
    </nav>
    );
}

export default Navigation;