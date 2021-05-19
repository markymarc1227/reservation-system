import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange }) => {
    return(
    <nav className="flex">
        <p onClick={() => onRouteChange('userhome')} className='f5 fw5 ml5 mr2 white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Home</p>
        <p onClick={() => onRouteChange('signout')} className='f5 fw5 mr5 push white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Logout</p>
    </nav>
    );
}

export default Navigation;