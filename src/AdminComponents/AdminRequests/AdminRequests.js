import React, {Component} from 'react';
import RequestCardList from './RequestCardList';
import {HeaderCard} from './RequestCard';
import LoadingIndicator from '../LoadingIndicator';
import Modal from '../Modal/Modal'

const offset = new Date().getTimezoneOffset();
const offsettedDate = new Date(new Date().getTime() - (offset*60*1000));
const standardDate = offsettedDate.toISOString().split('T')[0];

class AdminRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentReqDate: standardDate,
      currentReqCustomer: null,
      selectedCustomerName: "",
      pendingCustomers: [],
      showLoading: true,
      isModalShown: false,
      newReqDate: "",
      newReqTime: "",
      newBarber: ""
    };
  }

  showModal = () => {
    this.setState({ isModalShown: true });
  };

  hideModal = () => {
      this.setState({ 
        isModalShown: false,
        newReqDate: "",
        newReqTime: ""
      });
  };

  getPendingCustomers = () => {
    fetch(`http://localhost:3000/pendingCustomers/${this.state.currentReqDate}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
			.then(response => response.json())
			.then(customers => {
				this.setState({pendingCustomers: customers})
        this.setState({showLoading: false});
			})
      .catch(console.log);
  };

  onDateChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.setState({currentReqDate: value});
  };

  componentDidMount = () =>{
    this.getPendingCustomers();
  };

  onReqDateChange = () => {
    this.getPendingCustomers();
  };

  onReschedInputChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState(Object.assign(this.state, 
      { 
          [name]: value
      })
    );
    console.log(this.state);
  };

  onApproveCustomer = (event) => {
    this.setState({currentReqCustomer: event.target.value}, () => {
      console.log("onclick", this.state.currentReqCustomer);
      fetch('http://localhost:3000/approveRequest', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
        req_id: this.state.currentReqCustomer
			})
		})
			.then(response => response.json())
			.then(newCustomers => {
				if (newCustomers){
					this.getPendingCustomers()
					// this.props.onSubrouteChange('schedule');
				}
			})
      .catch(console.log);
    });
    // delete this.state.schedCustomers.req_id[value];
  };

  onOpenRescheduleModal = (event) => {
    const customerIndex = event.target.value;
    this.setState({
      currentReqCustomer: this.state.pendingCustomers[customerIndex].req_id,
      selectedCustomerName: this.state.pendingCustomers[customerIndex].firstname,
      newReqDate: this.state.pendingCustomers[customerIndex].reqdate,
      newReqTime: this.state.pendingCustomers[customerIndex].reqtime,
      newBarber: this.state.pendingCustomers[customerIndex].barber
    }, () => {
        this.showModal();
    });
    
  };

  onRescheduleCustomer = () => {
    fetch('http://localhost:3000/rescheduleRequest', {
			method: 'put',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
        req_id: this.state.currentReqCustomer,
        newReqDate: this.state.newReqDate,
        newReqTime: this.state.newReqTime,
        newBarber: this.state.newBarber
			})
		})
			.then(response => response.json())
			.then(newCustomers => {
				if (newCustomers){
					this.getPendingCustomers();
          this.hideModal();
					// this.props.onSubrouteChange('schedule');
				}
			})
      .catch(console.log);
  }

  render() {
    const {selectedCustomerName } = this.state;

    return (
      <div>
        <Modal isModalShown={this.state.isModalShown} handleClose={this.hideModal}>
        <p className="f4 b mb3">Select New Schedule for:</p>
        <p className="f3 b ma0">{selectedCustomerName.toUpperCase()}</p>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="date">Date</label>
                    <input className="b pa2 mt1 mb1 ba br4 bg-light-gray hover-bg-white w-50" 
                        type="date" 
                        name="newReqDate"  
                        id="newReqDate"
                        min= {new Date().toISOString().split("T")[0]}
                        onChange={this.onReschedInputChange}
                        value ={this.state.newReqDate}
                    />
                </div>
                <div className="mv2 tc">
                    <label className="db fw6 f6 tc" htmlFor="time">Time</label>
                    <input className="b pa2 mt1 ba br4 bg-light-gray hover-bg-white w-50" 
                        type="time" 
                        name="newReqTime"  
                        id="newReqTime"
                        min = "08:00"
                        max = "20:00"
                        value ={this.state.newReqTime}
                        onChange={this.onReschedInputChange}
                    />
                </div>
                <div className="mt3 mb0 tc">
                    <label className="db fw6 f6 tc" htmlFor="service">Preferred Barber</label>
                        <select className="pa2 mh2 mt1 mb1 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-50" 
                            name="newBarber"
                            id="newBarber"
                            value={this.state.newBarber}
                            onChange={this.onReschedInputChange}
                            >
                                <option value="Anyone">Anyone</option>
                                <option value="Barber1">Barber 1</option>
                                <option value="Barber2">Barber 2</option>
                                <option value="Barber3">Barber 3</option>
                        </select>
                </div>
                <div className="tc mt3 mb2">
                    <input 
                    onClick={this.onRescheduleCustomer} 
                    className="white ph4 pv2 input-reset ba br4 b--black bg-black grow pointer f6 dib" 
                    type="submit" 
                    value="Submit"/>
                </div>
        </Modal>
        <h1 className="f1 mt0 pa0 mb2 mh3 tc underline"> Requests </h1>
        <div className="flex flex-wrap items-center">
            <div className="f3 ml3 mr3 b">{new Date(this.state.currentReqDate).toDateString()}</div>
            <input className="b f6 bw1 b--black pv1 pl3 pr3 mt1 mb1 ba br4 bg-light-silver hover-bg-moon-gray" 
                        type="date" 
                        name="requestDate"  
                        id="reqeustDate"
                        onChange={this.onDateChange}
                    />
            <input  
                    className="black f6 mh3 bw1 b--black pv1 pl3 pr3 input-reset ba br4 bg-light-silver grow pointer f6" 
                    type="submit" 
                    value="Change Date"
                    onClick={this.onReqDateChange}
                    />
        </div>
        <HeaderCard/>
        { this.state.showLoading ? (<LoadingIndicator/>) : (<RequestCardList 
        pendingCustomers={this.state.pendingCustomers} 
        onApproveCustomer={this.onApproveCustomer} 
        onOpenRescheduleModal={this.onOpenRescheduleModal}/>)
          }
      </div>     
    );
  }
}

export default AdminRequests;
