import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {changeFirstName, changeSecondName} from "../redux/actions";

export function MainComponent() {

	const {firstName, secondName, changeFirstName, changeSecondName} = this.props;
	console.log(this.props);
	return (
		<div>
			<div>
				<input
					type="text"
					value={firstName}
					placeholder='First Name'
					onChange={event => {
						changeFirstName(event.target.value);
					}}
				/>
			</div>
			<div>
				<input
					type="text"
					value={secondName}
					placeholder='Second Name'
					onChange={event => {
						changeSecondName(event.target.value);
					}}
				/>
			</div>
			<div>
				{`${firstName} ${secondName}`}
			</div>
		</div>

	);
}

const mapStateToProps = (state) => {
	return {
		firstName: state.firstName,
		secondName: state.secondName
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		changeFirstName: bindActionCreators(changeFirstName, dispatch),
		changeSecondName: bindActionCreators(changeSecondName, dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);