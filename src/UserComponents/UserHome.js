import React, {Component} from 'react';
import RenderStatus from './RenderStatus';
import Navigation from './Navigation/Navigation';

class UserHome extends Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    const {name, status, onRouteChange} = this.props;
    return (
        <div>
            <Navigation onRouteChange={onRouteChange}/>
            <h1 className="f1 ma2 tc"> {`Hi, ${name}`}!</h1>
            <RenderStatus status={status}/>
        </div>
        
    );
  }
}

export default UserHome;
