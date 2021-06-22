import React from 'react';
import RescheduleModal from './Modal/RescheduleModal';

class Rescheduled extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalShown: false,
            newDate: '',
            newTime: '',
            newBarber: this.props.user.barber,
            hastimeError: false,
            hasReschedFormError: 0
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

        this.setState({[name]: value});
    };

    onReschedTimeChange = (event) => {
        this.setState({hastimeError: false});
        const target = event.target;
        const value = target.value;
        const hour = value.slice(0,2)
        if (parseInt(hour) >= 8 && parseInt(hour) <= 21) {
            this.onSchedChange(event);
        } else {
            this.setState({hastimeError: true});
        }
    };

    onConfirm = () => {
        fetch('https://safe-peak-29017.herokuapp.com/confirm', {
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
        fetch('https://safe-peak-29017.herokuapp.com/cancel', {
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
    if(!this.state.hastimeError) {
        fetch('https://safe-peak-29017.herokuapp.com/reschedule', {
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
				} else if (newbooking === "incorrect form submission"){
                    this.setState({hasReschedFormError: 1})
                  } else if (newbooking === "unable to reschedule request"){
                    this.setState({hasReschedFormError: 2})
                  }
			})
    } else {
        this.setState({hasReschedFormError: 1})
    }
    };
    
    render(){
        const {user} = this.props;
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
                    <select className="b pa2 mt1 ba br4 bg-light-gray hover-bg-white w-50" 
                        name="newTime"  
                        onChange={this.onReschedTimeChange}
                        onClick={this.onReschedTimeChange}
                    >  
                        <option value="" disabled selected>Select time:</option>
                        <option value="08:00">8:00am</option>
                        <option value="08:30">8:30am</option>
                        <option value="09:00">9:00am</option>
                        <option value="09:30">9:30am</option>
                        <option value="10:00">10:00am</option>
                        <option value="10:30">10:30am</option>
                        <option value="11:00">11:00am</option>
                        <option value="11:30">11:30am</option>
                        <option value="12:00">12:00pm</option>
                        <option value="12:30">12:30pm</option>
                        <option value="13:00">1:00pm</option>
                        <option value="13:30">1:30pm</option>
                        <option value="14:00">2:00pm</option>
                        <option value="14:30">2:30pm</option>
                        <option value="15:00">3:00pm</option>
                        <option value="15:30">3:30pm</option>
                        <option value="16:00">4:00pm</option>
                        <option value="16:30">4:30pm</option>
                        <option value="17:00">5:00pm</option>
                        <option value="17:30">5:30pm</option>
                        <option value="18:00">6:00pm</option>
                        <option value="18:30">6:30pm</option>
                        <option value="19:00">7:00pm</option>
                        <option value="19:30">7:30pm</option>
                        <option value="20:00">8:00pm</option>
                        <option value="20:30">8:30pm</option>
                        <option value="21:00">9:00pm</option>
                    </select>
                </div>
                { 
                    this.state.hastimeError ? <p className="b f7 mt1 mb0 black bg-moon-gray pa2 tc ba br3 b--black">Please select a time between 8:00am to 10:00pm.</p> : true
				}
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
                { this.state.hasReschedFormError === 1 ? <p className="b f5 mt3 mb0 black bg-moon-gray pa2 tc ba br3 b--black">Incorrect form submission. <br/> Please fill out every field correctly.</p> 
						: (
							this.state.hasReschedFormError === 2 ? <p className="b f5 mt3 mb0 black bg-moon-gray pa2 tc ba br3 b--black">Unable to reschedule. <br/> Please try again.</p> : <p></p>
							)
						}
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