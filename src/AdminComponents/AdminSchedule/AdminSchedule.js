import React, {Component} from 'react';
import ScheduleCardList from './ScheduleCardList';
import {HeaderCard} from './ScheduleCard';

const offset = new Date().getTimezoneOffset();
const offsettedDate = new Date(new Date().getTime() - (offset*60*1000));
const standardDate = offsettedDate.toISOString().split('T')[0];

class AdminSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
        done: "",
        noshow: "",
        currentDate: standardDate,
        schedCustomers: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/schedCustomers/${this.state.currentDate}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
			.then(response => response.json())
			.then(customers => {
				this.setState({schedCustomers: customers})
			})
  }
  
  onSchedDateChange = () => {
    fetch(`http://localhost:3000/schedCustomers/${this.state.currentDate}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
			.then(response => response.json())
			.then(customers => {
				this.setState({schedCustomers: customers})
			})
  }

  onDateChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.setState({currentDate: value});
  }

  render() {
    console.log(this.state.schedCustomers)

    return (
      <div>
        <h1 className="f1 mt0 pa0 mb2 mh3 tc underline"> Schedule </h1>
        <div className="flex flex-wrap items-center">
            <div className="f3 ml3 mr3 b">{new Date(this.state.currentDate).toDateString()}</div>
            <input className="b f6 bw1 b--black pv1 pl3 pr3 mt1 mb1 ba br4 bg-light-silver hover-bg-moon-gray" 
                type="date" 
                name="schedDate"  
                id="schedDate"
                onChange={this.onDateChange}
            />
            <input className="black f6 mh3 bw1 b--black pv1 pl3 pr3 input-reset ba br4 bg-light-silver grow pointer f6" 
                type="submit" 
                value="Change Date"
                onClick={this.onSchedDateChange}
            />
        </div>
          <HeaderCard/>
          <ScheduleCardList schedCustomers={this.state.schedCustomers}/>
      </div>
        
    );
  }
}

export default AdminSchedule;
