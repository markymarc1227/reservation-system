import React from 'react';
import LoadingIndicator from '../AdminComponents/LoadingIndicator';

class AdminSignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			adminEmail: '',
			adminPassword: '',
			adminFormError: 0,
			showAdminLoginLoading: false
		}
	}

	onEmailChange = (event) => {
		this.setState({adminEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({adminPassword: event.target.value})
	}

	onSubmitAdminSignIn = () => {
		this.setState({showAdminLoginLoading: true, adminFormError: 0});
		fetch('https://safe-peak-29017.herokuapp.com/adminsignin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				adminEmail: this.state.adminEmail,
				adminPassword: this.state.adminPassword
			})
		})
			.then(response => response.json())
			.then(admin => {
				this.setState({showAdminLoginLoading: false});
				if (admin.admin_id){
					this.props.loadAdmin(admin);
					this.props.onRouteChange('adminhome');
				}
				else if (admin === "incorrect form submission"){
					this.setState({adminFormError: 1})
				} 
				else if (admin === "wrong credentials"){
					this.setState({adminFormError: 2})
				}
			})
	}

	render() {
		const { onRouteChange } = this.props;
		return (
			<div>
				<h1 className="f-subheadline tc mh2">SUPREMO BARBERS - STA. CRUZ</h1>
				<article className="br3 ba bg-black mv4 w-100 w-50-m w-30-l mw6 shadow-5 center">
					<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_in" className="ba b--transparent ph0 mh0">
						<legend className="f2 tc fw8 ph0 mh0 white">ADMIN LOGIN</legend>
						<div className="mt3">
							{/* <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label> */}
							<input className="b pa2 pl3 black input-reset ba br4 bg-moon-gray hover-bg-white w-100" 
								type="email" 
								name="email-address" 
								id="email-address"
								onChange={this.onEmailChange}
								placeholder="Admin Email"
							/>

						</div>
						<div className="mv3">
							{/* <label className="db fw6 lh-copy f6" htmlFor="password">Password</label> */}
							<input className="b pa2 pl3 input-reset ba br4 bg-moon-gray hover-bg-white w-100" 
								type="password" 
								name="password"  
								id="password"
								onChange={this.onPasswordChange}
								placeholder="Admin Password"
								/>
						</div>
						</fieldset>
						<div className="tc">
						<input onClick={this.onSubmitAdminSignIn} className="f6 b black ph3 br4 pv2 input-reset ba bg-moon-gray grow pointer" 
							type="submit" 
							value="Login"/>
						</div>
						<div className="lh-copy mt3">
							<p onClick={() => onRouteChange('signin')} className="f6 white underline link dim db pointer tc">User Sign In</p>
						</div>
						{ this.state.showAdminLoginLoading ? (<LoadingIndicator/>) : <p></p>}
						{ this.state.adminFormError === 1 ? <p className="f5 mt3 mb0 white pa2 tc ba br3 b--white">Incorrect form submission. <br/> Please fill out every field.</p> 
						: (
							this.state.adminFormError === 2 ? <p className="f5 mt3 mb0 white pa2 tc ba br3 b--white">Invalid credentials. <br/> Make sure email and password are correct.</p> : <p></p>
							)
						}
					</div>
					</main>
				</article>		
			</div>
		);
	}
}

export default AdminSignIn;