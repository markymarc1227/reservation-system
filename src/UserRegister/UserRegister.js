import React from 'react';

class UserRegister extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			age: null,
			gender: 'male',
			contactNum: '',
			address: '',
			email: '',
			password: ''
		};
		this.onRegisterChange = this.onRegisterChange.bind(this);
	}

	onRegisterChange(event) {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	onSubmitRegister = () => {
		fetch('http://localhost:3000/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				age: this.state.age,
				gender: this.state.gender,
				contactNum: this.state.contactNum,
				address: this.state.address,
				})
		})
			.then(response => response.json())
			.then(user => {
				if (user.user_id){
					this.props.loadUser(user)
					this.props.onRouteChange('userhome');
				}
			})
	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div>
				<h1 className="f-subheadline tc mh2 mt3 mb2">SUPREMO BARBERS - STA. CRUZ</h1>
				<article className="br4 ba bg-white b--black-10 mt1 mb4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f2 tc fw6 ph0 mh0">REGISTER</legend>
						<div className="mt2">
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="text" 
								name="firstName"  
								id="firstName"
								onChange={this.onRegisterChange}
								placeholder="First Name"
							/>
						</div>
						<div className="mt2">
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="text" 
								name="lastName"  
								id="lastName"
								onChange={this.onRegisterChange}
								placeholder="Last Name"
							/>
						</div>
							<div className="mt2 db tc">
								<input className="pa2 b mh2 mb2 pl3 ba br4 bg-light-gray hover-bg-white w-35" 
									type="number" 
									name="age"  
									id="age"
									min="1"
									max="150"
									onChange={this.onRegisterChange}
									placeholder="Age"
								/>
								<select className="pa2 mh2 mb2 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-50 dib" 
								name="gender"
								value={this.state.gender}
								onChange={this.onRegisterChange}>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>
						<div className="mt0">
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="tel" 
								name="contactNum"  
								id="contactNum"
								onChange={this.onRegisterChange}
								placeholder="09XXXXXXXXX"
								pattern="[0-9]{15}"
							/>
						</div>
						<div className="mt2">
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="text" 
								name="address"  
								id="address"
								onChange={this.onRegisterChange}
								placeholder="Address"
							/>
						</div>
						<div className="mt2">
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="email" 
								name="email"  
								id="email"
								onChange={this.onRegisterChange}
								placeholder="Email"
								/>

						</div>
						<div className="mb2 mt2">
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="password" 
								name="password"  
								id="password"
								onChange={this.onRegisterChange}
								placeholder="Password"
							/>
						</div>
						</fieldset>
						<div className="tc mv2">
							<input 
							onClick={this.onSubmitRegister}
							className="f6 white ph3 br4 pv2 input-reset ba b--transparent bg-black grow pointer" 
							type="submit" 
							value="Register"
							/>
						</div>
						<div className="tc mt3 mb2">
							<p onClick={() => onRouteChange('signin')} className="f6 b black underline link dim db pointer tc">Back to Login</p>
						</div>
					</div>
					</main>
				</article>
			</div>	
		);
	}
}

export default UserRegister;