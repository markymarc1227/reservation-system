import React from 'react';
import RescheduleModal from './Modal/RescheduleModal';

class Rescheduled extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalShown: false,
            newDate: '',
            newTime: '',
            newBarber: this.props.user.barber
        };
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    showModal = () => {
        this.setState({ isModalShown: true });
    };
    
    hideModal = () => {
        this.setState({ isModalShown: false });
    };

    onSchedChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(Object.assign(this.state, 
        { 
            [name]: value
        })
        );
    };

    onConfirm = () => {
        fetch('http://localhost:3000/confirm', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				user_id: this.props.user.id,
                req_id: this.props.user.reqId
			})
		})
			.then(response => response.json())
			.then(newbooking => {
				if (newbooking.req_id){
					this.props.loadBooking(newbooking);
					this.props.onRouteChange('userhome');
				}
			})
    };

    onCancel = () => {
        fetch('http://localhost:3000/cancel', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				user_id: this.props.user.id,
                req_id: this.props.user.reqId
			})
		})
			.then(response => response.json())
			.then(newbooking => {
				if (newbooking.req_id){
                    this.props.resetBooking();
					this.props.onRouteChange('userhome');
				}
			})
    };

    onSubmitChange = () => {
        fetch('http://localhost:3000/reschedule', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				user_id: this.props.user.id,
                req_id: this.props.user.reqId,
                newDate: this.state.newDate,
                newTime: this.state.newTime,
                newBarber: this.state.newBarber
			})
		})
			.then(response => response.json())
			.then(newbooking => {
				if (newbooking.req_id){
					this.props.loadBooking(newbooking);
					this.props.onRouteChange('userhome');
				}
			})
    };
    
    render(){
        const {user} = this.props;
        console.log(this.state);
        console.log(this.props.user.reqId);
    return(
        <div>
            <RescheduleModal isModalShown={this.state.isModalShown} handleClose={this.hideModal}>
                <p className="f4 b">Select New Schedule:</p>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="date">Date</label>
                    <input className="b pa2 mt1 mb1 ba br4 bg-light-gray hover-bg-white w-50" 
                        type="date" 
                        name="newDate"  
                        id="newDate"
                        min= {new Date().toISOString().split("T")[0]}
                        onChange={this.onSchedChange}
                    />
                </div>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="time">Time</label>
                    <input className="b pa2 mt1 ba br4 bg-light-gray hover-bg-white w-50" 
                        type="time" 
                        name="newTime"  
                        id="newTime"
                        min = "08:00"
                        max = "20:00"
                        onChange={this.onSchedChange}
                    />
                </div>
                <div className="mt3 mb0 tc">
                    <label className="db fw6 f6 tc" htmlFor="service">Preferred Barber</label>
                        <select className="pa2 mh2 mt1 mb1 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-50" 
                            name="newBarber"
                            onChange={this.onSchedChange}
                            value={this.state.newBarber}>
                                <option value="anyone">Anyone</option>
                                <option value="barber1">Barber 1</option>
                                <option value="barber2">Barber 2</option>
                                <option value="barber3">Barber 3</option>
                        </select>
                </div>
                <div className="tc mt3 mb2">
                    <input 
                    onClick={this.onSubmitChange} 
                    className="white ph4 pv2 input-reset ba br4 b--black bg-black grow pointer f6 dib" 
                    type="submit" 
                    value="Submit"/>
                </div>
            </RescheduleModal>
            <article className="br4 ba bg-white b--black-10 mv4 w-100 w-50-m w-40-l mw6 shadow-5 center">
                <main className="pa4 black-80 white">
                    <div className="tc f4 mt3 black ">Your request was rescheduled on:</div>
                    <div className="tc f4 b pt3 pb2 black ">{user.resDate}</div>
                    <div className="tc f4 b pb3 black ">{user.resTime}</div>
                    <div className="tc f4 black ">Do you accept?</div>
                    <button onClick = {this.onConfirm} className="white ph4 mv2 pv2 input-reset ba br4 b--transparent bg-green grow pointer f6 db center">
                        Confirm
                    </button>
                    <p className="tc f4 black mv0">----- or -----</p>
                    <button onClick = {this.showModal} className="white ph4 mv2 pv2 input-reset ba br4 b--transparent bg-dark-green grow pointer f6 db center">
                        Reschedule
                    </button>
                    <button onClick = {this.onCancel} className="white ph4 mt4 mb1 pv1 input-reset ba br4 b--transparent bg-red grow pointer f6 db center">
                        Cancel my appointment.
                    </button>
                </main>
            </article>
        </div>
        );
    }
}

export default Rescheduled;