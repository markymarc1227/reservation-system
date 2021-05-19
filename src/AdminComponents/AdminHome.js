import React, {Component} from 'react';
import AdminNavigation from './AdminNavigation/AdminNavigation';
import RenderSubroute from './RenderSubroute';

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
        subroute: 'schedule'
    };
  }

  onSubrouteChange = (subroute) => {
    this.setState({subroute: subroute});
  };

  render() {
    const {subroute} = this.state;
    const {onRouteChange} = this.props;
    return (
        <div>
            <AdminNavigation onSubrouteChange={this.onSubrouteChange} onRouteChange={onRouteChange}/>
            <RenderSubroute subroute={subroute}/>
        </div>
        
    );
  }
}

export default AdminHome;
