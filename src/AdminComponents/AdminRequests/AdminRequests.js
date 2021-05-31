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
      pendingCustomers: [],
      showLoading: true,
      isModalShown: false
    };
  }

  showModal = () => {
    this.setState({ isModalShown: true });
  };

  hideModal = () => {
      this.setState({ isModalShown: false });
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
    this.showModal();
    this.setState({currentReqCustomer: event.target.value}, () => {
      console.log("onclick", this.state.currentReqCustomer);
      
      
    });
    // delete this.state.schedCustomers.req_id[value];
  };

  onRescheduleCustomer = () => {
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
  }

  render() {
    return (
      <div>
        <Modal isModalShown={this.state.isModalShown} handleClose={this.hideModal}>
                <p className="f4 b">New Schedule:</p>
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
