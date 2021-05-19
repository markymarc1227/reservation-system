import React from 'react';
import './AdminNavigation.css';

const AdminNavigation = ({ onSubrouteChange, onRouteChange }) => {
    return(
    <nav className="navigation">
        <p onClick={() => onSubrouteChange('schedule')} className='f5 fw5 ml2 mr3 mv2 white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer tc'>Schedule</p>
        <p onClick={() => onSubrouteChange('requests')} className='f5 fw5 ml2 mr3 mv2 white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer tc'>Requests</p>
        <p onClick={() => onSubrouteChange('completed')} className='f5 fw5 ml2 mr3 mv2 white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer tc'>Completed</p>


        <p onClick={() => onRouteChange('signout')} className='f5 fw5 mv2 push white hover-black hover-bg-moon-gray b--transparent bg-black ph3 br3 pv2 ba pointer tc'>Logout</p>
    </nav>
    );
}

export default AdminNavigation;