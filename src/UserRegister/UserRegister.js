import React from 'react';

class UserRegister extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			age: '',
			gender: 'select',
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

	onSubmitSignIn = () => {
		fetch('https://warm-shore-00390.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(response => response.json())
			.then(user => {
				if (user.id){
					this.props.loadUser(user)
					this.props.onRouteChange('home');
				}
			})
	}

	render() {
		const {onRouteChange} = this.props;
		return (
			<div>
				<h1 className="f-subheadline tc mh2">SUPREMO BARBERS - STA. CRUZ</h1>
				<article className="br4 ba bg-white b--black-10 mt1 mb4 w-100 w-50-m w-25-l mw6 shadow-5 center">
					<main className="pa4 black-80">
					<div className="measure">
						<fieldset id="sign_up" className="ba b--transparent ph0 mh0">
						<legend className="f2 tc fw6 ph0 mh0">REGISTER</legend>
						<div className="mt2">
							{/* <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label> */}
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="text" 
								name="firstName"  
								id="firstName"
								onChange={this.onRegisterChange}
								placeholder="First Name"
							/>
						</div>
						<div className="mt2">
							{/* <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label> */}
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="text" 
								name="lastName"  
								id="lastName"
								onChange={this.onRegisterChange}
								placeholder="Last Name"
							/>
						</div>
							<div className="mt2 db tc">
								{/* <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label> */}
								<input className="pa2 b mh2 mb2 pl3 ba br4 bg-light-gray hover-bg-white w-35" 
									type="number" 
									name="age"  
									id="age"
									min="1"
									max="150"
									onChange={this.onRegisterChange}
									placeholder="Age"
								/>
								{/* <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label> */}
								<select className="pa2 mh2 mb2 b pl2 pr3 ba br4 bg-light-gray hover-bg-white w-50 dib" 
								value={this.state.gender}
								onChange={this.onRegisterChange}>
									<option value="male">Male</option>
									<option value="female">Female</option>
								</select>
							</div>
						<div className="mt0">
							{/* <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label> */}
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
							{/* <label className="db fw6 lh-copy f6" htmlFor="Name">Name</label> */}
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="text" 
								name="address"  
								id="address"
								onChange={this.onRegisterChange}
								placeholder="Address"
							/>
						</div>
						<div className="mt2">
							{/* <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label> */}
							<input className="pa2 b pl3 input-reset ba br4 bg-light-gray hover-bg-white w-100" 
								type="email" 
								name="email"  
								id="email"
								onChange={this.onRegisterChange}
								placeholder="Email"
								/>

						</div>
						<div className="mb2 mt2">
							{/* <label className="db fw6 lh-copy f6" htmlFor="password">Password</label> */}
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
							onClick={() => onRouteChange('userhome')}
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