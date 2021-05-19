import React from 'react';
import './AdminNavigation.css';

const AdminNavigation = ({ onSubrouteChange, onRouteChange }) => {
    return(
    <nav className="flex">
        <p onClick={() => onSubrouteChange('schedule')} className='f5 fw5 ml5 mr2 white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Schedule</p>
        <p onClick={() => onSubrouteChange('requests')} className='f5 fw5 mr5 push white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Requests</p>
        <p onClick={() => onSubrouteChange('completed')} className='f5 fw5 mr5 push white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Completed</p>

        <p onClick={() => onRouteChange('signout')} className='f5 fw5 mr5 push white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer'>Logout</p>
    </nav>
    );
}

export default AdminNavigation;