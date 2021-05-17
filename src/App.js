import React, {Component} from 'react';
import RenderRoute from './RenderRoute';
import './App.css';

const initialState = {
  route: 'signin',
  isUserSignedIn: false,
  isAdminSignedIn: false,
  user: {
    id: '',
    name: '',
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
        name: '',
        email: '',
        service: '',
        resDate: '',
        resTime: '',
        barber: '',
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
    this.setState({
    user: {
      id: data.id,
      name: data.firstName,
      email: data.email,
      service: data.service,
      resDate: data.resDate,
      resTime: data.resTime,
      barber: data.barber,
      status: data.status
    }})
  }

  loadAdmin= (data) => {
    this.setState({admin: {
      id: data.adminid,
    }})
  }

  onInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState(Object.assign(this.state.user, 
      { 
        [name]: value
      }));

  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState(initialState);
    } else if (route === 'userhome'){
      this.setState({isUserSignedIn: true});
    } else if (route === 'adminhome'){
      this.setState({isAdminSignedIn: true});
    this.setState({route: route});
    }
  };

  render() {
    const { route, onRouteChange, onInputChange } = this.state;
    return (
      <RenderRoute route={route} onRouteChange={onRouteChange} onInputChange={onInputChange}/>
    );
  }
}

export default App;
