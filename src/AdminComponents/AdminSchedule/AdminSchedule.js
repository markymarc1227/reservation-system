import React, {Component} from 'react';
import ScheduleCardList from './ScheduleCardList';

class AdminSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
        done: "",
        noshow: "",
        currentDate: new Date().toDateString()
    };
  }

  
  render() {
    return (
      <div>
        <h1 className="f1 mt0 pa0 mb2 mh3 tc underline"> Schedule </h1>
        <div className="flex flex-wrap items-center">
            <div className="f3 ml3 mr3 b">{this.state.currentDate}</div>
            <input className="b f6 bw1 b--black pv1 pl3 pr3 mt1 mb1 ba br4 bg-light-silver hover-bg-moon-gray" 
                        type="date" 
                        name="schedDate"  
                        id="schedDate"
                    />
            <input  
                    className="black f6 mh3 bw1 b--black pv1 pl3 pr3 input-reset ba br4 bg-light-silver grow pointer f6" 
                    type="submit" 
                    value="Change Date"/>
        </div>
        <ScheduleCardList/>
      </div>
        
    );
  }
}

export default AdminSchedule;
