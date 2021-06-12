import React, {Component} from 'react';
import RenderRoute from './RenderRoute';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: 'signin',
      isUserSignedIn: false,
      isAdminSignedIn: false,
      hasBookingFormError: 0,
      user: {
        id: '',
        name: 'Someone',
        email: '',
        service: 'Gupit Supremo',
        resDate: '',
        resTime: '',
        barber: 'Anyone',
        status: '',
        reqId: ''
      },
      admin: {
        id: ''
      }
    };
  }

  resetState = () => {
    this.setState({
      route: 'signin',
      isUserSignedIn: false,
      isAdminSignedIn: false,
      hasBookingFormError: 0,
      user: {
        id: '',
        name: 'someone',
        email: '',
        service: 'Gupit Supremo',
        resDate: '',
        resTime: '',
        barber: 'Anyone',
        status: '',
        reqId: ''
      },
      admin: {
        id: ''
      }
    })
  }

  resetBooking = () => {
    this.setState(Object.assign(this.state.user, 
      { 
        service: 'Gupit Supremo',
        resDate: '',
        resTime: '',
        barber: 'Anyone',
        status: '',
        reqId: ''
      })
    );
  }

  loadUser = (data) => {
    this.setState(Object.assign(this.state.user, 
      { 
        id: data.user_id,
        name: data.firstname,
        email: data.user_email
      })
    );
    if (data.req_id){
      this.loadBooking(data);
    }
  }
  
  loadBooking = (data) => {
    const formatDate = new Date(data.reqdate).toLocaleDateString({},
      { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
  );
    const formatTime = new Date('1970-01-01T' + data.reqtime + 'Z')
    .toLocaleTimeString({},
        {timeZone:'UTC', hour12:true, hour:'numeric', minute:'numeric'}
    );
    
    this.setState(Object.assign(this.state.user, 
      { 
        reqId: data.req_id,
        service: data.service,
        resDate: formatDate,
        resTime: formatTime,
        barber: data.barber,
        status: data.status
      })
    );
  }

  loadAdmin = (data) => {
    this.setState({
      admin: {
        id: data.admin_id
    }
    })
  }

  onInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(Object.assign(this.state.user, 
      { 
        [name]: value
      })
    );
  }

  onTimeChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(Object.assign(this.state.user, 
      { 
        [name]: value
      })
    );
  }

  onSubmitBooking = () => {
		fetch('https://safe-peak-29017.herokuapp.com/bookingrequest', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				user_id: this.state.user.id,
        service: this.state.user.service,
        resDate: this.state.user.resDate,
        resTime: this.state.user.resTime,
        barber: this.state.user.barber
			})
		})
			.then(response => response.json())
			.then(booking => {
				if (booking.req_id){
					this.loadBooking(booking);
					this.onRouteChange('userhome');
				} else if (booking === "incorrect form submission"){
          this.setState({hasBookingFormError: 1})
        } else if (booking === "unable to book request"){
          this.setState({hasBookingFormError: 2})
        }
			})
	}

  onRefresh = () => {
    fetch('https://safe-peak-29017.herokuapp.com/refresh', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        req_id: this.state.user.reqId,
      })
    })
    .then(response => response.json())
    .then(newbooking => {
      if (newbooking.req_id){
        this.loadBooking(newbooking);
        this.onRouteChange('userhome');
      }
    })
  };

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.resetState();
    } else if (route === 'userhome') {
      this.setState({isUserSignedIn: true});
    } else if (route === 'adminhome') {
      this.setState({isAdminSignedIn: true});
    }
      this.setState({route: route});
  }

  render() {
    const { route, user, hasBookingFormError } = this.state;
    return (
      <RenderRoute 
        route={route} 
        onRouteChange={this.onRouteChange} 
        onInputChange={this.onInputChange}
        onSubmitBooking={this.onSubmitBooking}
        onRefresh={this.onRefresh}
        loadUser={this.loadUser}
        loadBooking={this.loadBooking}
        loadAdmin={this.loadAdmin}
        resetBooking={this.resetBooking}
        user={user}
        hasBookingFormError={hasBookingFormError}
        />
    );
  }
}

export default App;

