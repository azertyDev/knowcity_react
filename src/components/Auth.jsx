import React from "react";

export class Auth extends React.Component {
	constructor(props) {
		super(props);

		this.onEmailChange = this.onEmailChange.bind(this);
		this.onPasswordChange = this.onPasswordChange.bind(this);
	}

	onEmailChange = (event) => {
		this.props.setEmailText(event.target.value);
	};

	onPasswordChange = (event) => {
		this.props.setPasswordText(event.target.value);
	};

	render() {
		return (
			<div className="auth">
				<h3>Sign In</h3>
				<form action="">
					<div>
						<input type="text" name="email" placeholder="E-mail" value={this.props.email}
						       onChange={this.onEmailChange}/>
					</div>
					<div>
						<input type="text" name="password" placeholder="Password" value={this.props.password}
						       onChange={this.onPasswordChange}/>
					</div>
					<div>
						<button>Sign in</button>
					</div>
				</form>
			</div>
		);
	}
}

	