import React, {Component} from 'react';
import RenderRoute from './RenderRoute';
import './App.css';

const initialState = {
  route: 'signin',
  isUserSignedIn: false,
  isAdminSignedIn: false,
  user: {
    id: '',
    name: 'someone',
    email: ''
  },
  booking: {
    service: 'gupit supremo',
    resDate: '',
    resTime: '',
    barber: 'anyone',
    status: '',
    reqId: ''
  },
  admin: {
    id: ''
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'signin',
      isUserSignedIn: false,
      isAdminSignedIn: false,
      user: {
        id: '',
        name: 'someone',
        email: '',
      },
      booking: {
        service: 'gupit supremo',
        resDate: '',
        resTime: '',
        barber: 'anyone',
        status: '',
        reqId: ''
      },
      admin: {
        id: ''
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  loadUser = (data) => {
    this.setState(Object.assign(this.state.user, 
      { 
        id: data.user_id,
        name: data.firstname,
        email: data.user_email
      })
    );
  }
  
  loadBooking = (data) => {
    this.setState(Object.assign(this.state.booking, 
      { 
        reqId: data.req_id,
        service: data.service,
        resDate: data.reqdate.split("T")[0],
        resTime: data.reqtime,
        barber: data.barber,
        status: data.status
      })
    );
  }

  loadAdmin = (data) => {
    this.setState({
      admin: {
      id: data.adminid,
    }})
  }

  onInputChange = (event) =>{
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(Object.assign(this.state.user, 
      { 
        [name]: value
      })
    );
  }

  onSubmitBooking = () => {
		fetch('http://localhost:3000/bookingrequest', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				user_id: this.state.user.id,
        service: this.state.booking.service,
        resDate: this.state.booking.resDate,
        resTime: this.state.booking.resTime,
        barber: this.state.booking.barber
			})
		})
			.then(response => response.json())
			.then(booking => {
				if (booking.req_id){
					this.loadBooking(booking);
					this.onRouteChange('userhome');
				}
			})
	}


  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState);
    } else if (route === 'userhome'){
      this.setState({isUserSignedIn: true});
    } else if (route === 'adminhome'){
      this.setState({isAdminSignedIn: true});
    }
    this.setState({route: route});
  };

  render() {
    const { route } = this.state;
    const { name } = this.state.user;
    const { barber, service, status } = this.state.booking;
    console.log("----------user-----------------")
        for (const key of Object.keys(this.state.user)) {    
            console.log(key, this.state.user[key]);
        }
        console.log("----------booking------------------")
        for (const key of Object.keys(this.state.booking)) {    
            console.log(key, this.state.booking[key]);
        }
    return (
      <RenderRoute 
        route={route} 
        onRouteChange={this.onRouteChange} 
        onInputChange={this.onInputChange}
        onSubmitBooking={this.onSubmitBooking}
        loadUser={this.loadUser}
        loadBooking={this.loadBooking}
        barber={barber}
        service={service}
        status={status}
        name={name}
        />
    );
  }
}

export default App;
