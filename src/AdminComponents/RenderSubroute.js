import React from 'react';
import AdminSchedule from './AdminSchedule/AdminSchedule';
import AdminRequests from './AdminRequests/AdminRequests';
import AdminCompleted from './AdminCompleted/AdminCompleted';


const RenderSubroute = ({subroute}) => {
  switch (subroute) {
    case 'schedule':
        return <AdminSchedule/>;
    case 'requests':
        return <AdminRequests/>;
    case 'completed':
        return <AdminCompleted/>;
    default:
        return <AdminSchedule/>;
  }
};

export default RenderSubroute;