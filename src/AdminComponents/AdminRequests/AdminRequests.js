import React, {Component} from 'react';
import RequestCardList from './RequestCardList';

class AdminRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {
        accept: "",
        resDate: "",
        resTime: "",
        currentDate: new Date().toDateString(),
        pendingCustomers: []
    };
  }

  render() {
    return (
      <div>
        <h1 className="f1 mt0 pa0 mb2 mh3 tc underline"> Requests </h1>
        <div className="flex flex-wrap items-center">
            <div className="f3 ml3 mr3 b">{this.state.currentDate}</div>
            <input className="b f6 bw1 b--black pv1 pl3 pr3 mt1 mb1 ba br4 bg-light-silver hover-bg-moon-gray" 
                        type="date" 
                        name="requestDate"  
                        id="reqeustDate"
                    />
            <input  
                    className="black f6 mh3 bw1 b--black pv1 pl3 pr3 input-reset ba br4 bg-light-silver grow pointer f6" 
                    type="submit" 
                    value="Change Date"/>
        </div>
        
        <RequestCardList/>
      </div>     
    );
  }
}

export default AdminRequests;
