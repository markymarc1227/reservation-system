import React from 'react';

class UserSignIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			signInEmail: '',
			signInPassword: '',
			formError: 0
		}
	}

	onEmailChange = (event) => {
		this.setState({signInEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({signInPassword: event.target.value})
	}

	onSubmitSignIn = () => {
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				signInEmail: this.state.signInEmail,
				signInPassword: this.state.signInPassword
				})
			})	
			.then(response => response.json())
			.then(user => {
				if (user.user_id){
					this.props.loadUser(user);
					this.props.onRouteChange('userhome');
				} 
				else if (user === "incorrect form submission"){
					this.setState({formError: 1})
				} 
				else if (user === "wrong credentials"){
					this.setState({formError: 2})
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
						<legend className="f2 tc fw8 ph0 mh0 white">LOGIN</legend>
						<div className="mt3">
							<input className="b pa2 pl3 black input-reset ba br4 bg-moon-gray hover-bg-white w-100" 
								type="email" 
								name="email-address" 
								id="email-address"
								onChange={this.onEmailChange}
								placeholder="Email"
							/>

						</div>
						<div className="mv3">
							<input className="b pa2 pl3 input-reset ba br4 bg-moon-gray hover-bg-white w-100" 
								type="password" 
								name="password"  
								id="password"
								onChange={this.onPasswordChange}
								placeholder="Password"
								/>
						</div>
						</fieldset>
						<div className="tc">
						<input onClick={this.onSubmitSignIn} className="f6 b black ph3 br4 pv2 input-reset ba bg-moon-gray grow pointer" 
							type="submit" 
							value="Login"/>
						</div>
						<div className="lh-copy mt3">
							<p onClick={() => onRouteChange('register')} className="f6 white underline link dim db pointer tc">Register</p>
							<p onClick={() => onRouteChange('adminsignin')} className="f6 white underline link dim db pointer tc">Admin</p>
						</div>

						{ this.state.formError === 1 ? <p className="f5 mt3 mb0 white pa2 tc ba br3 b--white">Incorrect form submission. <br/> Please fill out every field.</p> 
						: (
							this.state.formError === 2 ? <p className="f5 white pa2 tc ba br3 b--white">Invalid credentials. <br/> Make sure email and password are correct.</p> : <p></p>
							)
						}
					</div>
					</main>
				</article>	
			</div>
		);
	}
}

export default UserSignIn;