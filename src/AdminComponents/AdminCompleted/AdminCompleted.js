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
    fetch(`https://safe-peak-29017.herokuapp.com/completedCustomers/${this.state.currentComDate}`, {
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
    this.setState(Object.assign(this.state.selectedCustomer, 
      { 
        name: this.state.completedCustomers[customerIndex].firstname,
        userid: this.state.completedCustomers[customerIndex].user_id,
        service: this.state.completedCustomers[customerIndex].service,
        address: this.state.completedCustomers[customerIndex].address,
        sorethroat : this.state.completedCustomers[customerIndex].sorethroat,
        bodypain : this.state.completedCustomers[customerIndex].bodypain,
        headache : this.state.completedCustomers[customerIndex].headache,
        fever: this.state.completedCustomers[customerIndex].fever,
        closecovid: this.state.completedCustomers[customerIndex].closecovid === 'true',
        contactwsick: this.state.completedCustomers[customerIndex].contactwsick === 'true',
        travelledoutcountry: this.state.completedCustomers[customerIndex].travelledoutcountry === 'true',
        travelledncr: this.state.completedCustomers[customerIndex].travelledncr === 'true'
      }), () => {
        this.showModal()
      }
    );
  };

  render() {
    const {completedCustomers, selectedCustomer} = this.state;
    const {checklistAnswerConverter} = this.props;
    return (
      <div>
      <Modal isModalShown={this.state.isModalShown} handleClose={this.hideModal}>
            <p className="f4 b mb3">Appointment Details for:</p>
            <p className="f3 b ma0 mb3 underline">{selectedCustomer.name.toUpperCase()}</p>
            <p className="f5 b ma1"> User ID:  {selectedCustomer.userid}</p>
            <p className="f5 b ma1"> Service:  {selectedCustomer.service}</p>
            <p className="f5 b ma1"> Address:  {selectedCustomer.address}</p>
            <p className="f4 b ma2"> Health Checklist Results:</p>
            <p className="f5 b ma1"> Sore Throat:  {checklistAnswerConverter(selectedCustomer.sorethroat)}</p>
            <p className="f5 b ma1"> Body Pain:  {checklistAnswerConverter(selectedCustomer.bodypain)}</p>
            <p className="f5 b ma1"> Headache:  {checklistAnswerConverter(selectedCustomer.headache)}</p>
            <p className="f5 b ma1"> Fever:  {checklistAnswerConverter(selectedCustomer.fever)}</p>
            <p className="f5 b ma1"> Had contact with COVID-19 case:  {checklistAnswerConverter(selectedCustomer.closecovid)}</p>
            <p className="f5 b ma1"> Had contact with sick person:  {checklistAnswerConverter(selectedCustomer.contactwsick)}</p>
            <p className="f5 b ma1"> Travelled outside the Philippines:  {checklistAnswerConverter(selectedCustomer.travelledoutcountry)}</p>
            <p className="f5 b ma1"> Travelled outside NCR:  {checklistAnswerConverter(selectedCustomer.travelledncr)}</p>
      </Modal>
        <h1 className="f1 mt0 pa0 mb2 mh3 tc underline"> Completed </h1>
        <div className="flex flex-wrap items-center justify-center">
            <div className="f3 ml3 mr3 b ba ph3 pv1 br4 b--transparent bg-moon-gray">{new Date(this.state.currentComDate).toDateString()}</div>
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

        />)
          }
      </div>     
    );
  }
}

export default AdminCompleted;
