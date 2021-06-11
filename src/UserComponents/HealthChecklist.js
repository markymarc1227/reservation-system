import React from 'react';

class HealthChecklist extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sorethroat: false,
            bodypain: false,
            headache: false,
            fever: false,
            closecovid: "false",
            contactwsick: "false",
            travelledoutcountry: "false",
            travelledncr: "false"
        }
        this.onFormChange = this.onFormChange.bind(this);
    }

    onFormChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState(Object.assign(this.state, 
          { 
            [name]: value
          })
        );
      }
    
    onSubmitChecklist = () => {
        fetch('http://localhost:3000/checklist', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
                req_id: this.props.user.reqId,
				sorethroat: this.state.sorethroat,
                bodypain: this.state.bodypain,
                headache: this.state.headache,
                fever: this.state.fever,
                closecovid: this.state.closecovid,
                contactwsick: this.state.contactwsick,
                travelledoutcountry: this.state.travelledoutcountry,
                travelledncr: this.state.travelledncr
			})
		})
			.then(response => response.json())
			.then(details => {
				if (details.req_id){
					this.props.loadBooking(details);
					this.props.onRouteChange('userhome');
				}
			})

    }
    render() {
        return(
            <div>
                <div className="mv3 b black tc f3">Appointment Confirmed!</div>
                <div className="mv2 mb0 black tc f4">To view the details of your appointment, kindly answer this health checklist:</div>
                <article className="br4 ba bg-white b--black-10 mt3 mb4 w-100 w-100-m w-75-l mw9 shadow-5 center">
                    <main className="pa3 tc f4">
                        <div className="b mt1 mb2 black ">Health Checklist</div>
                        <p className="f5 b mt1 mv3 black">Are you experiencing any of the following? (Select all that apply.)</p>
                        <div className="f5 flex flex-wrap items-center justify-center">
                            <label className="mh4 mv2">
                                <input
                                className="mr2"
                                type="checkbox"
                                name="sorethroat"
                                checked={this.state.sorethroat}
                                onChange={this.onFormChange}
                                />Sore Throat
                            </label>
                            <label className="mh4 mv2">
                                <input
                                className="mr2"
                                type="checkbox"
                                name="bodypain"
                                checked={this.state.bodypain}
                                onChange={this.onFormChange}
                                />Body Pain
                            </label>
                            <label className="mh4 mv2">
                                <input
                                className="mr2"
                                type="checkbox"
                                name="headache"
                                checked={this.state.headache}
                                onChange={this.onFormChange}
                                />Headache
                            </label>
                            <label className="mh4 mv2">
                                <input
                                className="mr2"
                                type="checkbox"
                                name="fever"
                                checked={this.state.fever}
                                onChange={this.onFormChange}
                                />Fever for the past few days
                            </label>
                        </div>
                        <p className="f5 b mt1 mv3 black">Have you worked together or stayed in the same close environment of a confirmed COVID-19 case?</p>
                        <div className="f5 flex justify-center">
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="closecovid"
                                value="true"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />Yes
                            </label>
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="closecovid"
                                value="false"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />No
                            </label>
                        </div>
                        <p className="f5 b mt1 mv3 black">Have you had any contact with anyone with fever, cough, colds, and sore throat in the past 2 weeks?</p>
                        <div className="f5 flex justify-center">
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="contactwsick"
                                value="true"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />Yes
                            </label>
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="contactwsick"
                                value="false"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />No
                            </label>
                        </div>
                        <p className="f5 b mt1 mv3 black">Have you travelled outside of the Philippines in the last 14 days?</p>
                        <div className="f5 flex justify-center">
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="travelledoutcountry"
                                value="true"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />Yes
                            </label>
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="travelledoutcountry"
                                value="false"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />No
                            </label>
                        </div>
                        <p className="f5 b mt1 mv3 black">Have you travelled to any area in NCR aside from your house?</p>
                        <div className="f5 flex justify-center">
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="travelledncr"
                                value="true"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />Yes
                            </label>
                            <label className="mh4">
                            <input
                                className="mr2"
                                type="radio"
                                name="travelledncr"
                                value="false"
                                // checked={state.level === "acolyte"}
                                onChange={this.onFormChange}
                            />No
                            </label>
                        </div>
                        <p className="f5 mt1 mv3 ph5 black">I hereby authorize Supremo Barber, to collect and process the data indicated herein for the purpose of effecting control of the COVID-19 infection. I understand that my personal information is protected by RA 10173, Data Privacy Act of 2012, and that I am required by RA 11469, Bayanihan to Heal as One Act, to provide truthful information.
                        </p>
                        <div className="tc mv2">
							<input
                            onClick = {this.onSubmitChecklist} 
							className="f6 white ph3 br4 pv2 input-reset ba b--transparent bg-black grow pointer" 
							type="submit" 
							value="CONFIRM"
							/>
						</div>
                    </main>
                </article>
            </div>
        );
    }
}

export default HealthChecklist;