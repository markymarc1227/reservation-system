import React, {Component} from 'react';
import RenderStatus from './RenderStatus';
import Navigation from './Navigation/Navigation';

class UserHome extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
        <div>
            <Navigation/>
            <h1> Hi, User!</h1>
            <RenderStatus/>
        </div>
        
    );
  }
}

export default UserHome;
