import React, {Component} from 'react';

class AdminRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accept: "",
        resDate: "",
        resTime: ""
    };
  }

  render() {
    return (
        <div>
            Requests
        </div>
        
    );
  }
}

export default AdminRequests;
