import React, {Component} from 'react';
import ScheduleCardList from './ScheduleCardList';

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
        <h1 className="f1 mt0 mb2 mh3 tc"> Schedule </h1>
        <div className="f3 mh3 b">Date</div>
        <ScheduleCardList/>
      </div>
        
    );
  }
}

export default AdminSchedule;
