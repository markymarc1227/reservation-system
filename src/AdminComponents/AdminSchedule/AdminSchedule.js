import React, {Component} from 'react';

class AdminSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
        done: "",
        noshow: ""
    };
  }

  render() {
    return (
        <div>
            Schedule
        </div>
        
    );
  }
}

export default AdminSchedule;
