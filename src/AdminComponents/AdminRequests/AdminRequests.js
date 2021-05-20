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
        <h1 className="f1 mt0 mb2 mh4"> Requests </h1>
        <div className="f3 mh4 b">Date</div>
      </div>     
    );
  }
}

export default AdminRequests;
