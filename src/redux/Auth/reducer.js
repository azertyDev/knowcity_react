import {AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT} from "./actions";

const initialState = {
	email: "",
	password: ""
};

export const authReducer = (state = initialState, {type, payload}) => {
	console.log(state);
	switch (type) {
		case AUTH_CHANGE_EMAIL_TEXT:
			return {
				...state,
				email: payload
			};
		case AUTH_CHANGE_PASSWORD_TEXT:
			return {
				...state,
				password: payload
			};
		default:
			return state;
	}
};
