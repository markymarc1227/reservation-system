import React, {Component} from 'react';
import CompletedCardList from './CompletedCardList';
import {HeaderCard} from './CompletedCard';
import LoadingIndicator from '../LoadingIndicator';
import Modal from '../Modal/Modal'

const offset = new Date().getTimezoneOffset();
const offsettedDate = new Date(new Date().getTime() - (offset*60*1000));
const standardDate = offsettedDate.toISOString().split('T')[0];

class AdminCompleted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComDate: standardDate,
      completedCustomers: [],
      currentCustomerIndex: null,
      selectedCustomer: {
        name: "",
        userid: "",
        reqid: "",
        reqdate: "",
        reqtime: "",
        barber: "",
        service: "",
        address: "",
        fever: "",
        closecovid: "",
        contactwsick: "",
        travelledoutcountry: "",
        travelledncr: ""
      },
      showLoading: true,
      isModalShown: false
    };
  }

  getCompletedCustomers = () => {
    fetch(`http://localhost:3000/completedCustomers/${this.state.currentComDate}`, {
			method: 'get',
			headers: {'Content-Type': 'application/json'}
		})
			.then(response => response.json())
			.then(customers => {
				this.setState({completedCustomers: customers})
        this.setState({showLoading: false});
			})
      .catch(console.log);
  };

  onDateChange = (event) => {
    const target = event.target;
    const value = target.value;
    this.setState({currentComDate: value});
  };

  componentDidMount = () =>{
    this.getCompletedCustomers();
  };

  onComDateChange = () => {
    this.getCompletedCustomers();
  };

  showModal = () => {
    this.setState({ isModalShown: true });
  };

  hideModal = () => {
    this.setState({ isModalShown: false });
  };

  onViewDetails = (event) => {
    const customerIndex = event.target.value;
    console.log("customer index", customerIndex)
    this.setState(Object.assign(this.state.selectedCustomer, 
      { 
        name: this.state.completedCustomers[customerIndex].firstname,
        userid: this.state.completedCustomers[customerIndex].user_id,
        service: this.state.completedCustomers[customerIndex].service,
        address: this.state.completedCustomers[customerIndex].address,
        sorethroat : this.state.completedCustomers[customerIndex].sorethroat.toString().toUpperCase(),
        bodypain : this.state.completedCustomers[customerIndex].bodypain.toString().toUpperCase(),
        headache : this.state.completedCustomers[customerIndex].headache.toString().toUpperCase(),
        fever: this.state.completedCustomers[customerIndex].fever.toString().toUpperCase(),
        closecovid: this.state.completedCustomers[customerIndex].closecovid,
        contactwsick: this.state.completedCustomers[customerIndex].contactwsick,
        travelledoutcountry: this.state.completedCustomers[customerIndex].travelledoutcountry,
        travelledncr: this.state.completedCustomers[customerIndex].travelledncr
      }), () => {
        this.showModal()
      }
    );
  };

  render() {
    const {completedCustomers, selectedCustomer} = this.state;
    console.log(completedCustomers);
    return (
      <div>
      <Modal isModalShown={this.state.isModalShown} handleClose={this.hideModal}>
            <p className="f4 b mb3">Appointment Details for:</p>
            <p className="f3 b ma0 mb3 underline">{selectedCustomer.name.toUpperCase()}</p>
            <p className="f5 b ma1"> User ID:  {selectedCustomer.userid}</p>
            <p className="f5 b ma1"> Service:  {selectedCustomer.service}</p>
            <p className="f5 b ma1"> Address:  {selectedCustomer.address}</p>
            <p className="f4 b ma2"> Health Checklist Results:</p>
            <p className="f5 b ma1"> Sore Throat:  {selectedCustomer.sorethroat}</p>
            <p className="f5 b ma1"> Body Pain:  {selectedCustomer.bodypain}</p>
            <p className="f5 b ma1"> Headache:  {selectedCustomer.headache}</p>
            <p className="f5 b ma1"> Fever:  {selectedCustomer.fever}</p>
            <p className="f5 b ma1"> Had contact with COVID-19 case:  {selectedCustomer.closecovid.toUpperCase()}</p>
            <p className="f5 b ma1"> Had contact with sick person:  {selectedCustomer.contactwsick.toUpperCase()}</p>
            <p className="f5 b ma1"> Travelled outside the Philippines:  {selectedCustomer.travelledoutcountry.toUpperCase()}</p>
            <p className="f5 b ma1"> Travelled outside NCR:  {selectedCustomer.travelledncr.toUpperCase()}</p>
      </Modal>
        <h1 className="f1 mt0 pa0 mb2 mh3 tc underline"> Completed </h1>
        <div className="flex flex-wrap items-center">
            <div className="f3 ml3 mr3 b">{new Date(this.state.currentComDate).toDateString()}</div>
            <input className="b f6 bw1 b--black pv1 pl3 pr3 mt1 mb1 ba br4 bg-light-silver hover-bg-moon-gray" 
                        type="date" 
                        name="comDate"  
                        id="comDate"
                        onChange={this.onDateChange}
                    />
            <input  
                    className="black f6 mh3 bw1 b--black pv1 pl3 pr3 input-reset ba br4 bg-light-silver grow pointer f6" 
                    type="submit" 
                    value="Change Date"
                    onClick={this.onComDateChange}
                    />
        </div>
        <HeaderCard/>
        { this.state.showLoading ? (<LoadingIndicator/>) : (<CompletedCardList 
        CompletedCustomers={completedCustomers} onViewDetails={this.onViewDetails}
        // onOpenRescheduleModal={this.onOpenRescheduleModal}

        />)
          }
      </div>     
    );
  }
}

export default AdminCompleted;
