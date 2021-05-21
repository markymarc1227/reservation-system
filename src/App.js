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
    email: '',
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
        id: data.id,
        name: data.firstName,
        email: data.email,
        service: data.service,
        resDate: data.resDate,
        resTime: data.resTime,
        barber: data.barber,
        status: data.status,
        reqId: data.req_id
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

  loadBooking = (data) => {
    this.setState(Object.assign(this.state.booking, 
      { 
        reqId: data.req_id,
        service: data.service,
        resDate: data.resDate.split("T")[0],
        resTime: data.resTime,
        barber: data.barber,
        status: data.status
      })
    );
  }

  onSubmitBooking = () => {
		fetch('http://localhost:3000/bookingrequest', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				user_id: this.state.user.id,
        service: this.state.user.service,
        resDate: this.state.user.resDate,
        resTime: this.state.user.resTime,
        barber: this.state.user.barber,
        status: 'pending',
			})
		})
			.then(response => response.json())
			.then(booking => {
				if (booking.req_id){
					this.loadBooking(booking);
					this.onRouteChange('home');
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
    const { status, name } = this.state.user;
    console.log("----------------------------")
        for (const key of Object.keys(this.state.user)) {    
            console.log(key, this.state.user[key]);
        }
    return (
      <RenderRoute 
        route={route} 
        onRouteChange={this.onRouteChange} 
        onInputChange={this.onInputChange}
        loadUser={this.loadUser}
        status={status}
        name={name}
        />
    );
  }
}

export default App;
